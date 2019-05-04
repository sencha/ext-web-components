import { Base, define, config, copy, defProp, is } from '../../../extjs-core/src';

import { ExpressionCompiler } from './ExpressionCompiler';
import { ExpressionParser } from './ExpressionParser';

import { Cache } from '../collection/Cache';
import { formatters } from '../format';

/**
 *
 * The template is parsed and stored in a representation like this:
 *
 *      me.text = 'Hey {foo.bar}! Test {bar} and {foo.bar} with {abc} over {bar:number}'
 *
 *      parsed = me.parsed;
 *      
 *      me.tokens = [ 'foo.bar', 'bar', 'abc' ]
 *
 *      me.buffer = [           me.slots = [
 *          'Hey ',                 undefined,
 *          undefined,              { token: 'foo.bar', pos: 0 },
 *          '! Test ',              undefined,
 *          undefined,              { token: 'bar', pos: 1 },
 *          ' and ',                undefined,
 *          undefined,              { token: 'foo.bar', pos: 0 },
 *          ' with ',               undefined,
 *          undefined,              { token: 'abc', pos: 2 },
 *          ' over ',               undefined,
 *          undefined               { token: 'bar', fmt: 'number', pos: 1 }
 *      ]                       ]
 *
 * NOTE: The particulars of what is stored here, while private, are likely to be
 * important to Sencha Architect so changes need to be coordinated.
 * @private
 */
@define({
    configurable: 'open',

    prototype: {
        literalChar: '~',
        escapeChar: '\\',

        /**
         * @property {String[]} buffer
         * Initially this is just the array of string fragments with `null` between each
         * to hold the place of a substitution token. On first use these slots are filled
         * with the token's value and this array is joined to form the output.
         * @private
         */
        buffer: null,
    
        /**
         * @property {Object[]} slots
         * The elements of this array line up with those of `buffer`. This array holds
         * the parsed information for the substitution token that fills a given slot in
         * the generated string. Indices that correspond to literal text are `null`.
         *
         * Consider the following substitution token:
         *
         *      {foo:this.fmt(2,4)}
         *
         * The object in this array has the following properties to describe this token:
         *
         *   * `fmt` The name of the formatting function ("fmt") or `null` if none.
         *   * `index` The numeric index if this is not a named substitution or `null`.
         *   * `not` True if the token has a logical not ("!") at the front.
         *   * `token` The name of the token ("foo") if not an `index`.
         *   * `pos` The position of this token in the `refs` array.
         *   * `scope` A reference to the object on which the `fmt` method exists. This
         *    will be `this.formatters` if no "this." is present or `null` if it is (or
         *    if there is no `fmt`). In the above example, this is `null` to indicate the
         *    scope is unknown.
         *   * `args` An array of arguments to `fmt` if the arguments are simple enough
         *    to parse directly. Otherwise this is `null` and `fn` is used.
         *   * `fn` A generated function to use to evaluate the arguments to the `fmt`. In
         *    rare cases these arguments can reference global variables so the expression
         *    must be evaluated on each call.
         *   * `format` The method to call to perform the format. This method accepts the
         *    scope (in case `scope` is unknown) and the value. This function is `null` if
         *    there is no `fmt`.
         *
         * @private
         */
        slots: null
    }
})
class Template extends Base {
    /**
     * @cfg {Boolean} escapes
     * Set to `false` to disable escape characters.
     *
     * The `'\'` character is used to escape the next character, treating it as a literal
     * character even if it is a `'{'` or other escape.
     *
     * The `'~~'` sequence will treat any subsequent characters as a verbatim, literal
     * expression and no extra processing will take place. This includes escapes and
     * replacement tokens.
     */
    @config
    escapes = true;
    
    @config('cached')
    formatters = formatters;

    @config
    positional = true;
    
    @config
    text = null;
    
    construct (config) {
        let n, obj;
        
        if (typeof config === 'string') {
            config = {
                text: config
            };
        }
        else if (is.array(config)) {
            obj = config[n = config.length - 1];

            if (typeof obj === 'string') {
                obj = null;
            }
            else {
                config = config.slice(0, n);
            }
            
            config = copy({ text: config.join('') }, obj);
        }

        super.construct(config);
    }
    
    /**
     * @property {String[]} refs
     * The distinct set of references used in the template excluding formatting. This is
     * used to ensure that only one evaluation is performed per unique reference. Each
     * entry in `slots` knows its index (`pos`) in this array from which to pick up its
     * value, apply formats and place the result in `buffer`.
     * 
     * This array can be passed to `ViewModel.bind` to perform a "multi-bind". The result
     * is an array of values corresponding these references.
     * @private
     */
    get refs () {
        let me = this;
        
        me._parse(); // replaces this getter on the instance going forward...
        
        return me.refs;
    }

    /**
     * Applies this template to the given `values`. The `values` must correspond to the
     * `refs` returned by `getTokens`.
     *
     * @param {Array/Object} values The values of the `refs`.
     * @param {Object} [scope] The object associated with `this.` in formatter calls.
     * @return {String}
     */
    apply (values, scope) {
        let me = this;
        let refs = me.refs;  // on first call this triggers the _parse()
        let slots = me.slots;
        let buffer = me.buffer;
        let length = slots.length;
        let i, slot;
        
        if (!is.array(values)) {
            values = me._interpretRefs(refs, values);
        }

        for (i = 0; i < length; ++i) {
            slot = slots[i];
            
            if (slot) {
                buffer[i] = slot(values, scope || me);
            }
        }

        // If we have only one component and it is a slot (a {} component), then we
        // want to evaluate to whatever that expression generated.
        if (slot && me.single) {
            return buffer[0];
        }

        return buffer.join('');
    }

    /**
     * Returns true if the expression is static, meaning it has no
     * refs or slots that need to be evaluated.
     *
     * @private
     */
    isStatic () {
        let refs = this.refs;  // ensures we are parsed

        return !(refs.length + this.slots.length);
    }
    
    //--------------------------------------------------------------------------------
    // Statics
    
    static from (text) {
        let cls = this;
        let cache = cls.cache;
        
        if (!cls.hasOwnProperty('cache')) {
            cls.cache = cache = new TemplateCache(cls);
        }

        return cache.get(text);
    }
    
    //--------------------------------------------------------------------------------
    // Internals

    _compileSlot (compiler, parser, pos) {
        parser.reset(this.text, pos);

        let expr = parser.parse();
        let token = parser.expect('}'); // ensure the next token is "}"
        let fn = compiler.compile(expr, parser.debug);

        return [ token.at + 1, fn ];
    }

    _interpretRefs (refs, data) {
        let splits = refs.splits;
        let values = [];
        let n = refs.length;
        let d, i, v;
        
        if (!splits) {
            // First time here we take the refs and split them on '.' (but only for
            // strings, not numbers)
            refs.splits = splits = [];

            for (i = n; i-- > 0; /* empty */) {
                v = refs[i];
                splits[i] = (typeof v === 'string') ? v.split('.') : [v];
            }
        }

        for (i = n; i-- > 0; /* empty */) {
            // Each element splits[i] is the refs[i].split('.') so we can easily use
            // it to descend the data object.
            d = data;

            for (v of splits[i]) {
                if (!(d = d[v])) {
                    break;
                }
            }
            
            values[i] = d;
        }
        
        return values;
    }

    /**
     * Parses the template text into `buffer`, `slots` and `refs`. This method is called
     * automatically when the template is first used.
     * @return {Template}
     * @private
     */
    _parse () {
        let me = this;
        let text = me.text;
        let length = text.length;
        let pos = 0;
        let escapes = me.escapes;
        let current = '';
        let i = 0;
        let esc = me.escapeChar;
        let lit = me.literalChar;
        let compiler = ExpressionCompiler.fly(me.formatters, me.positional);
        let parser = ExpressionParser.fly();
        let buffer = me.buffer = [];
        let slots = me.slots = [];
        let escaped, lastEscaped, c, prev;

        // text = 'Hello {foo:this.fmt(2,4)} World {bar} - {1}'
        while (i < length) {
            c = text[i];
            lastEscaped = escaped;
            escaped = escapes && c === esc;

            if (escaped) {
                c = text[i + 1];
                ++i;
            }
            else if (c === lit && prev === lit && !lastEscaped) {
                current = current.slice(0, -1);
                current += text.substring(i + 1);
                
                break;
            }
            else if (c === '{') {
                if (current) {
                    buffer[pos++] = current;
                    current = '';
                }
                
                [ i, me.slots[pos] ] = me._compileSlot(compiler, parser, i + 1);
                ++pos;
                
                continue;
            }
            
            current += c;
            ++i;
            prev = c;
        }

        if (current) {
            buffer[pos] = current;
        }

        me.single = buffer.length === 0 && slots.length === 1;

        defProp(me, 'refs', compiler.refs);

        compiler.release();
        parser.release();
        
        return me;
    }
}

class TemplateCache extends Cache {
    constructor (Tpl) {
        super();

        this.Tpl = Tpl;
    }

    miss (text) {
        return new this.Tpl(text);
    }
}

const formatCache = new TemplateCache(Template);
const formatRe = /{\d+}/;

formatters.format = (fmt, ...args) => {
    let ret = fmt;
    let tpl;
    
    if (formatRe.test(fmt)) {
        tpl = formatCache.get(fmt);
        
        ret = tpl.apply(args);
    }
    
    return ret;
};

export { Template };
