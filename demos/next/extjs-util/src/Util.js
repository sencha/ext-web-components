import { assert, is, typeOf } from '../../extjs-core/src';

import { quotedStringStickyRe, stickyRegExp } from './string';

import { Locale } from './Locale';
import { ExtDate } from './Date';

// shortcut for the special named scopes for listener scope resolution
export const namedScopes = {
    'this': {
        isThis: 1
    },

    controller: {
        isController: 1
    },

    // owner: {
    //     isOwner: 1
    // },

    // Uses helper Ext.lookUpFn to find the scope where fn is defined (skips the
    // component at which things originate):
    up: {
        isUp: 1
    },

    // These two are private, used to indicate that listeners were declared on the
    // class body with either an unspecified scope, or scope:'controller'
    self: {
        isSelf: 1
    },

    'self.controller': {
        isSelf: 1,
        isController: 1
    }
};

function lookUpFn (from, fn) {
    let controller, scope;

    //<debug>
    assert(from && is.callable(from.up), 'Callback "up." requires a caller with up() method');
    //</debug>

    for (scope = from.up(); scope && !scope[fn]; scope = scope.up()) {
        controller = scope.controller;

        if (controller && controller[fn]) {
            scope = controller;
            break;
        }
    }

    //<debug>
    assert(scope && is.callable(scope[fn]),
           'No such method "{0}" found up() from {1}', fn, from.id);
    //</debug>

    return scope;
}

/**
 * Execute a callback function in a particular scope. If `callback` argument is a
 * function reference, that is called. If it is a string, the string is assumed to
 * be the name of a method on the given `scope`. If no function is passed the call
 * is ignored.
 *
 * For example, these calls are equivalent:
 *
 *      var myFunc = this.myFunc;
 *
 *      callback('myFunc', this, [arg1, arg2]);
 *      callback(myFunc, this, [arg1, arg2]);
 *
 *      is.callable(myFunc) && this.myFunc(arg1, arg2);
 *
 * @param {Function/String} fn The callback function to execute or the name of
 * the callback method on the provided `scope`.
 * @param {Object} [scope] The scope in which `callback` should be invoked. If `callback`
 * is a string this object provides the method by that name. If this is `null` then
 * the `caller` is used to resolve the scope to a `ViewController` or the proper
 * `defaultListenerScope`.
 * @param {Array} [args] The arguments to pass to the function.
 * @param {Object} [caller] The object calling the callback. This is used to resolve
 * named methods when no explicit `scope` is provided.
 * @param {Object} [defaultScope=caller] The default scope to return if none is found.
 * @return The value returned by the callback or `undefined` (if there is a `delay`
 * or if the `callback` is not a function).
 */
export function callback (fn, scope, args, caller, defaultScope) {
    let namedScope = (scope in namedScopes);
    let ret;
    
    if (fn) {
        if (fn.charAt) { // if (isString(fn))
            // Custom components cannot often use declarative method resolution when
            // they need to allow the user to supply declarative method names that can
            // reach the user's controller. The "up" callback syntax can help with that:
            //
            //      xtype: 'button',
            //      handler: 'up.onFoo',
            //
            // When callback('up.onFoo',..., button) is called, we can perform a
            // "button.up('[onFoo]')" search for the handler. Thus we have a declarative
            // way to dispatch such handlers that will work even if the user can supply
            // such handlers.
            //
            if (fn[2] === '.') { // callback = 'up.foo'
                //<debug>
                assert(fn.substring(0, 2) === 'up', 'Invalid callback method name "{0}"', fn);
                assert(!scope, 'Callback "up" syntax is incompatible with scopes');
                //</debug>
        
                scope = lookUpFn(caller, fn = fn.substring(3));
            }
            else if (caller) {
                if (namedScope && namedScope.isUp) {
                    scope = lookUpFn(caller, fn);
                }
                else if (!scope || namedScope) {
                    scope = caller.resolveListenerScope(namedScope ? scope : defaultScope);
                }
            }
        
            //<debug>
            assert(scope && is.object(scope), 'Named method "{0}" requires a scope object', fn);
            assert(is.callable(scope[fn]), 'No method named "{0}" on {1}', fn,
                   scope.$className || scope.name);
            //</debug>
        
            fn = scope[fn];
        }
        else if (namedScope) {
            scope = defaultScope || caller;
        }
        else if (!scope) {
            scope = caller;
        }
        
        if (is.callable(fn)) {
            scope = scope || null;
            ret = args ? fn.apply(scope, args) : fn.call(scope);
        }
    }

    return ret;
}

/**
 * Coerces the first value if possible so that it is comparable to the second value.
 *
 * Coercion only works between the basic atomic data types String, Boolean, Number, Date, null
 * and undefined. Numbers and numeric strings are coerced to Dates using the value
 * as the millisecond era value.
 *
 * Strings are coerced to Dates by parsing using the
 * {@link Locale#defaultDateFormat defaultDateFormat}.
 *
 * For example
 *
 *     Ext.coerce('false', true);
 *
 * returns the boolean value `false` because the second parameter is of type `Boolean`.
 *
 * @param from The value to coerce
 * @param to The value it must be compared against
 */
export function coerceValue (from, to) {
    let fromType = typeOf(from);
    let toType = typeOf(to);

    if (fromType !== toType && toType in coerceValue.toTypes) {
        return coerceValue.toTypes[toType](from, fromType === 'string');
    }
    
    return from;
}

coerceValue.toTypes = {
    boolean (v, isString) {
        // See http://ecma262-5.com/ELS5_HTML.htm#Section_11.9.3 as to why '0'.
        // TL;DR => ('0' == 0), so if given string '0', we must return boolean false.
        return isString && (!v || v === 'false' || v === '0') ? false : Boolean(v);
    },
    
    date (from, isString) {
        return isString && isNaN(from)
            ? ExtDate.parse(from, Locale.current.defaultDateFormat)
            : new Date(Number(from));
    },
    
    null (v, isString) {
        return isString && (!v || v === 'null') ? null : false;
    },
    
    number (v) {
        return Number(v);
    },

    string (v) {
        return String(v);
    },
    
    undefined (v, isString) {
        return isString && (!v || v === 'undefined') ? undefined : false;
    }
};

/**
 * Used like so to wrap a `new Function()` and pass in properties via an outer scope:
 * 
 *      compile({ foo, bar }, 'a1, a2', code, preamble);
 * 
 * The `code` text is the normal function inner content but it gets wrapper here as
 * follows:
 * 
 *      preamble
 *      
 *      return function (a1, a2) {
 *          code
 *      };
 * 
 * This is passed to `new Function` which produces this:
 * 
 *      function (foo, bar) {
 *          preamble
 *          
 *          return function (a1, a2) {
 *              code
 *          };
 *      }
 * 
 * This function is called immediately and the inner function is returned.
 * 
 * @param {Object} vars An object whose properties will be scope variables for `code`.
 * @param {String} args The argument list for the function. Pass `''` if no args.
 * @param {String} code The body of the function
 * @param {String} [preamble] An optional segment of code to inject in the closure.
 * @return {Function}
 */
export function compile (vars, args, code, preamble) {
    let outers = vars ? Object.keys(vars) : [];
    let params = outers.map(name => vars[name]);
    
    // return function (a, b) { ... }
    let body = `return function (${args}) {\n    ${code}\n};`;
    
    if (preamble) {
        body = preamble + '\n\n' + body;
    }
    
    let f = new Function(...outers, body);
    
    return f(...params);
}

export function returnTrue () {
    return true;
}

//<debug>
const stripCommentRe = /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g;
//</debug>

const closers = {
    '{': '}',
    '(': ')',
    '[': ']'
};

function indexOfCloser (str, index) {
    let opener = str[index];
    let closer = closers[opener];
    let level = 1;
    let c, i, m;
    
    for (i = index + 1; i < str.length; ++i) {
        if (closer === (c = str[i])) {
            if (! --level) {
                return i;
            }
        }
        else if (c === opener) {
            ++level;
        }
        else if (c === `'` || c === `"` || c === '`') {
            // Skip string literal
            if (!(m = quotedStringStickyRe.matchAt(i, str))) {
                return -1;
            }
            
            i += m[0].length - 1;
        }
    }
    
    return -1;
}

/**
 * Parses the code of a function object (via its `toString()`) and returns a descriptor
 * object for its signature. For example:
 * 
 *      let foo = (abc, def = 42) => abc + def;
 *      let desc = parseCode(foo);
 *      
 *      console.log(desc.args);
 *      > ['abc', 'def']
 *      
 *      console.log(desc.name);
 *      > null
 *      
 *      console.log(desc.defaults);
 *      > [undefined, '42']
 * 
 * NOTE: This method is by no means perfect in this job and likely will be confused by
 * some advanced function signatures. In particular a template literal containing complex
 * interpolations such as immediately invoked function expressions would require a full
 * ECMAScript parser to interpret correctly.
 * 
 * @param {Function} fn The function to parse.
 * @return {Object} The signature descriptor or `null` if the function is too complex.
 * @return {String} return.name The function name or `''`.
 * @return {String[]} return.args The function argument names.
 * @return {String} return.body The function body text (inside the curly braces or the
 * right side of the `=>`).
 * @return {String[]} return.defaults The default values for each of the `args`.
 * @return {String} return.destructure The character '{' or '[' or null.
 */
export function parseCode (fn) {
    let symbol = parseCode.symbol;
    let regexs = parseCode.regexs;
    let ret = fn[symbol];
    let arg, args, body, c, def, defaults, destructure, i, k, match, name, str;
    
    if (!fn.hasOwnProperty(symbol)) {
        str = toCode(fn);
        
        // Here's what we're up against at the start:
        //
        //  str =
        //      "function () { ..."
        //      "function (abc, ...) { ..."
        //      "function foo () { ..."
        //      "function foo (abc, ...) { ..."
        //      "foo () { ..."
        //      "foo (abc, ...) { ..."
        //      "() => { ..."
        //      "(abc, ...) => { ..."
        //      "abc => { ..."
        
        defaults = [];
        
        if ((match = regexs.arrow0.exec(str))) {
            // No args just arrow fn: "() => ..."
            args = [];
        }
        else if ((match = regexs.arrow1.exec(str))) {
            // Just a one arg arrow fn: "a => ..."
            args = [match[1]];
        }
        
        if (match) {
            body = str.substring(match[0].length, match[2] ? str.lastIndexOf('}') : 1e9);
        }
        else {
            // All other forms have an open paren
            i = str.indexOf('(');
            name = str.substring(0, i).trim();  // could be "", "foo" or "function foo"
            args = [];
            
            for (++i; i < str.length; ++i) {
                c = str[i];
                
                if ('{['.includes(c)) {
                    // Object/array destructing argument list:
                    //  function foo ({ a, b }) { ... }
                    //  function foo ([ a, b ]) { ... }
                    if (destructure) {
                        return null;
                    }

                    destructure = c;
                }
                else if (!' \t'.includes(c)) {
                    break;
                }
            }

            while ((c = str[i]) !== ')') {
                if (', \t\n\r'.includes(c)) {
                    ++i;
                    continue;
                }
                
                if (destructure && c === closers[destructure]) {
                    i = str.indexOf(')', i);
                    break;
                }

                if (!(match = regexs.arg.matchAt(i, str))) {
                    return null;
                }
                
                i += match[0].length;
                arg = match[1];
                def = undefined;
                
                // Default arguments make this job massively harder since they can be
                // strings and those strings can contain anything. They can also be
                // template literals and things go off the rails. For now all we can do
                // really is a best-effort search for the end of the "value"
                if (match[2]) {
                    // If there is a default argument, we need to skip over it
                    c = str[k = i];
                    
                    if ('`"\''.includes(c)) {
                        if (!(match = quotedStringStickyRe.matchAt(i, str))) {
                            return null;
                        }

                        i += match[0].length;
                    }
                    else if ('({['.includes(c)) {
                        if ((i = indexOfCloser(str, i)) < 0) {
                            return null;
                        }

                        ++i;
                    }
                    else {
                        if ((i = str.indexOf(',', k)) < 0) {
                            if ((i = str.indexOf(')', k)) < 0) {
                                return null;
                            }
                        }
                    }

                    def = str.substring(k, i);
                }

                args.push(arg);
                defaults.push(def);
            }

            match = regexs.close.matchAt(i, str);
            i += match[0].length;
            body = str.substring(i, match[0].includes('{') ? str.lastIndexOf('}') : 1e9);

            if (name) {
                name = name.split(' ');

                if ((name = name[name.length - 1]) === 'function') {
                    name = 0;
                }
            }
        }

        body = body.trim();
        name = name || '';
        fn[symbol] = ret = { name, args, body, defaults, destructure };
    }
    
    return ret;
}

parseCode.symbol = Symbol('parsed');
parseCode.regexs = {
    arg: stickyRegExp(`s*([a-z0-9_$]+)\\s*(=?)\\s*`, 'i'),
    arrow0: /^\s*\(\s*\)\s*=>\s*({?)/,
    arrow1: /^\s*([a-z0-9_$]+)\s*=>\s*({?)/i,
    close: stickyRegExp(`\\s*\\)\\s*(?:=>)?\\s*{?`)
};

export function toCode (fn) {
    let s = fn ? fn.toString() : '';

    //<debug>
    s = s.replace(stripCommentRe, '');
    //</debug>

    return s;
}
