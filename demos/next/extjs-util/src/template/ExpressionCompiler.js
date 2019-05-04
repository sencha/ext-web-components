import {
    Empty,
    define,
    arrayify, raise
} from '../../../extjs-core/src';

import { compile } from '../Util';
import { quote } from '../string';
import { Fly } from '../mixins/Fly';

/**
 * This class compiles template expressions.
 * @private
 */
@define({
    prototype: {
        formatters: null,
        positional: true,

        refs: null
    }
})
class ExpressionCompiler extends Fly {
    // noinspection JSCheckFunctionSignatures
    reset (formatters, positional) {
        let me = this;
        let refs = [];
        
        me.depth = 0;
        me.formatters = formatters;
        me.positional = positional;
        me.refs = refs;

        refs.byName = new Empty();
        
        return me;
    }

    /**
     * @param {Symbol/Symbol[]} expr
     * @param {String} [debug='']
     * @return {Function}
     */
    compile (expr, debug) {
        let me = this;
        let defs = me.definitions = [];
        let body = me.body = [];
        let fn, preamble, i, length, temp;

        body.push('return ' + me._assemble(expr) + ';');

        preamble = 'var me,';
        temp = 'var a = arrayify(values);\nme = scope;\n';

        if (!(length = me.refs.length)) {
            preamble += 'v0;';
            temp += 'v0 = a[0];';
        }
        else {
            for (i = 0; i < length; ++i) {
                preamble += ' v' + i + ((i === length - 1) ? ';' : ',');
                temp += 'v' + i + ' = a[' + i + ']; ';
            }
        }

        defs.unshift(preamble);
        body.unshift(temp);

        if (debug) {
            body.unshift(debug);
        }

        body = body.join('\n');

        preamble = defs.join('\n');

        /*
        Preamble:
        
            var me, v0;
            function f0() {
                var ret;
                ret = me.multiply(v0, 4);
                ret = me.divide(ret, 2);
                return ret;
            }
    
            return function (values, scope) {

        Body:
                var a = arrayify(values);
                me = scope;
                v0 = a[0];
                return f0();

            }
        */
        fn = compile({ arrayify, fm: me.formatters }, 'values, scope', body, preamble);
        
        fn.refs = me.refs;
        fn.refsByName = me.refsByName;

        me.definitions = me.body = null;

        return fn;
    }
    
    //-------------------------------------------------------------------------------
    // Internals

    /**
     * Adds a new function to the final compiled function
     * @param body
     * @return {string} Name of the function
     * @private
     */
    _addFn (body) {
        let defs = this.definitions;
        let name = 'f' + defs.length;

        defs.push('function ' + name + '() {', body, '}');
        
        return name + '()';
    }

    /**
     * Adds the specified identifier expression to our `refs`.
     * @param identifier
     * @return {string} Name of the variable assigned for this token in the compiled function
     * @private
     */
    _addRef (identifier) {
        let refs = this.refs;
        let refsByName = refs.byName;
        let pos = refsByName[identifier];

        // token can be ignored when this function is called via `_formatterFn`
        if (pos === undefined) {
            // push returns length after pushing, so index is -1:
            refsByName[identifier] = pos = refs.push(identifier) - 1;
        }

        return 'v' + pos;
    }

    /**
     * Compiles the specified symbol
     *
     * @param expr
     * @return {String}
     * @private
     */
    _assemble (expr) {
        let me = this;
        let arity = expr.arity;

        try {
            ++me.depth;
            
            switch (arity) {
                case 'ident':
                    return me._addRef(expr.value);

                case 'binary':
                case 'formatter':
                case 'literal':
                case 'ternary':
                case 'unary':
                    return me[arity](expr);
            }
        }
        finally {
            --me.depth;
        }

        raise(`Compile error! Unknown symbol ${arity}`);
    }

    binary (expr) {
        return '(' +
            this._assemble(expr.lhs) + ' ' + expr.value + ' ' + this._assemble(expr.rhs) +
        ')';
    }
    
    _fail (at, msg) {
        let err = new Error(`Failed to compile expression: ` + msg);
        
        err.at = at;
        
        throw err;
    }

    formatter (expr) {
        let me = this;
        let fmt = expr.fmt;
        let length = fmt.length;
        let depth = me.depth;
        let body = [
            'var ret;'
        ];
        let i;

        if (fmt.length) {
            me.depth = 0;

            body.push('ret = ' + me._formatterFn(fmt[0], me._assemble(expr.operand)) + ';');

            ++me.depth;
            
            for (i = 1; i < length; i++) {
                body.push('ret = ' + me._formatterFn(fmt[i], 'ret') + ';');
            }
            
            me.depth = depth;
        }

        body.push('return ret;');

        return me._addFn(body.join('\n'));
    }

    _formatterFn (expr, value) {
        let me = this;
        let formatters = me.formatters;
        let args = [];
        let code = '';
        let fmt, i, length;

        if (expr.isIdent) {
            // the function has no arguments
            fmt = expr.value;
        }
        else if (expr.isInvoke) {
            fmt = expr.operand.value;
            args = expr.args;
        }

        if (fmt.startsWith('this.')) {
            fmt = 'me.' + fmt.substring(5);
        }
        else if (formatters && fmt in formatters) {
            fmt = 'fm.' + fmt;
        }
        else {
            return me._fail(expr.at, `invalid formatter "${fmt}"`);
        }

        code += value;
        length = args.length;
        
        ++me.depth;
        
        for (i = 0; i < length; i++) {
            code += ', ' + me._assemble(args[i]);
        }

        --me.depth;

        return fmt + '(' + code + ')';
    }
    
    literal (expr) {
        let me = this;
        let value = expr.value;
        let ret;

        if (me.positional && me.depth < 2 && expr.is.number && !expr.token.text.includes('.')) {
            ret = me._addRef(value);
        }
        else {
            ret = (typeof value === 'string') ? quote(value) : value;
        }

        return ret;
    }

    ternary (expr) {
        return '(' +
            this._assemble(expr.condition) + ' ? ' + this._assemble(expr.tv) + ' : ' +
            this._assemble(expr.fv) +
        ')';
    }

    unary (expr) {
        let v = expr.value;
        let op = expr.operand;

        if (v === '!' || v === '-' || v === '+') {
            return v + '(' + this._assemble(op) + ')';
        }

        // if (v === '@') {
        //     // @ should be used to prefix global identifiers and nothing else
        //     if (!op.isIdent) {
        //         return this._fail(expr.at, `unexpected symbol "${op.id}"`);
        //     }
        //    
        //     return op.value;
        // }
        
        return '';
    }
}

export { ExpressionCompiler };
