//<debug>
import { assert } from '../../extjs-core/src';
//</debug>

/**
 */
export const ident = {
    /**
     * @private
     */
    seed: 0,

    /**
     * @private
     */
    prefix: 'ext-',

    /**
     * @property {RegExp}
     * Regular expression used for validating identifiers.
     */
    validRe: /^[a-z_][a-z0-9\-_]*$/i,

    /**
     * Generates unique ids. If the object/element is passed and it already has an `id`,
     * it is unchanged.
     * @param {Object} [o] The object to generate an id for.
     * @param {String} [prefix="ext-"] The `id` prefix.
     * @return {String}
     */
    id (o, prefix) {
        let id = o && o.id;

        if (!id) {
            id = (prefix || ident.prefix) + (++ident.seed);

            if (o) {
                o.id = id;
            }
        }

        return id;
    },

    /**
     * Converts an id (`'foo'`) into an id selector (`'#foo'`).  This method is used
     * internally by the framework whenever an id needs to be converted into a selector
     * and is provided as a hook for those that need to escape ID selectors since,
     * as of Ext 5.0, the framework no longer escapes IDs by default.
     *
     * @param {String} id
     * @return {String}
     */
    makeSelector (id) {
        //<debug>
        assert(ident.validRe.test(id),
               'Invalid id selector "{0}" (must enable complex ids)', id);
        //</debug>

        return '#' + id;
    }
};
