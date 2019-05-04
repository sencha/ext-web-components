import { Base, define, config, is } from '../../../extjs-core/src';

import { Template } from './Template';

/**
 * This class accepts an object that serves as a template for creating new objects. Like
 * other templates (`Ext.XTemplate`) this creation step requires a context object to give
 * the template its values.
 *
 * For example:
 *
 *      var tpl = new ObjectTemplate({
 *          property: 'Hello {name}',
 *          data: {
 *              value: '{age}'
 *          }
 *      });
 *
 *      var obj = tpl.apply({
 *          name: 'Bill',
 *          age: 42
 *      });
 *
 *      // obj = {
 *      //     property: 'Hello Bill',
 *      //     data: {
 *      //         value: 42
 *      //     }
 *      // }
 */
@define({
    prototype: {
        valueRe: /^[{][a-z.]+[}]$/i
    }
})
class ObjectTemplate extends Base {
    @config('cached')
    excludeProperties = {};

    @config
    template = null;

    /**
     * Creates an `ObjectTemplate` given a config object or instance.
     * @param {Object/ObjectTemplate} template The template object.
     * @param {Object} [options]
     * @return {ObjectTemplate}
     */
    static create (template, options) {
        return template.isObjectTemplate ? template : new ObjectTemplate(template, options);
    }

    /**
     * Constructs the `ObjectTemplate`. The actual compilation of the object to a ready to
     * apply form happens on the first call to `apply`.
     * @param {Object/Object[]} template
     * @param {Object} [options]
     */
    construct (template, options) {
        let config;
        
        if (!options && is.array(template)) {
            [ template, options ] = template;
        }
        
        if (options) {
            config = {
                ...options,
                template
            };
        }
        else {
            config = {
                template
            };
        }

        super.construct(config);
    }

    /**
     * Applies the given `context` object to this template and returns a new object with
     * the appropriate pieces replaced.
     * @param {Object} context The data used to populate the template.
     * @return {Object}
     */
    apply (context) {
        let me = this;

        delete me.apply;

        me.apply = me.compile(me.template);

        return me.apply(context);
    }

    /**
     * Compiles the  given template into an `apply` method that is ready to run. This
     * method is used recursively to process object properties and array elements.
     * @param {String/Object/Array} template
     * @return {Function}
     */
    compile (template) {
        let me = this;
        let exclude = me.excludeProperties;
        let compiled, i, len, fn;

        if (is.string(template)) {
            if (template.indexOf('{') < 0) {
                fn = () => template;
            }
            else if (me.valueRe.test(template)) {
                template = template.substring(1, template.length - 1).split('.');

                fn = (context) => {
                    let v, i;
                    
                    for (v = context, i = 0; v && i < template.length; ++i) {
                        v = v[template[i]];
                    }

                    return v;
                };
            }
            else {
                template = new Template(template);

                fn = (context) =>
                    template.apply(context);  // wrapped to allow debugger breakpoint
            }
        }
        else if (!template || is.primitive(template) || is.callable(template)) {
            fn = () => template;
        }
        else if (is.array(template)) {
            compiled = [];

            for (i = 0, len = template.length; i < len; ++i) {
                compiled[i] = me.compile(template[i]);
            }

            fn = (context) => {
                let ret = [];
                let i;

                for (i = 0; i < len; ++i) {
                    ret[i] = compiled[i](context);
                }

                return ret;
            };
        }
        else {
            compiled = {};

            for (i in template) {
                if (!exclude[i]) {
                    compiled[i] = me.compile(template[i]);
                }
            }

            fn = (context) => {
                let ret = {};
                let i, v;

                for (i in template) {
                    v = exclude[i] ? template[i] : compiled[i](context);

                    if (v !== undefined) {
                        ret[i] = v;
                    }
                }

                return ret;
            };
        }

        return fn;
    }
}

export { ObjectTemplate };
