import {
    config, define
} from '../../../extjs-core/src';

import { Identifiable } from '../mixins';

/**
 * @private
 */
@define({
    tags: 'isFilter',
    
    prototypes: {
        /**
         * @property {Number} generation
         * this property is a Mutation counter which is incremented whenever the filter
         * changes in a way that may change either its serialized form or its result.
         * @readonly
         */
        generation: 0
    }
})
class BasicFilter extends Identifiable {
    /**
     * @cfg {String} id
     * An identifier by which this Filter is known, for example, as a member of a
     * {@link Store#cfg!filters Store's filters collection}.
     *
     * Identified filters are manageable in such collections because they can be found
     * or removed using their `id`.
     */

    /**
     * @cfg {Boolean} disabled
     * Setting this property to `true` disables this individual filter.
     */
    @config('initial')
    disabled = false;

    /**
     * @cfg {Function} serializer
     * A function to post-process any serialization. Accepts the serialized filter
     * containing `property`, `value` and `operator` properties, and may either
     * mutate it, or return a completely new representation. Returning a falsy
     * value does not modify the representation.
     */
    @config
    serializer = null;

    updateDisabled () {
        // Developers may use this to see if a filter has changed in ways that must cause
        // a reevaluation of filtering
        if (!this.constructing) {
            ++this.generation;
        }
    }

    /**
     * @method filter
     * @param {Object} item
     * @return {Boolean}
     */

    /**
     * @method serialize
     * Returns this filter's serialized state. This is used when transmitting this filter
     * to a server.
     * @return {Object}
     */

    /**
     * Serialize this filter into the `out` array (if possible).
     * @param {Array} out The array of simple and-able filters.
     * @return {Boolean} `true` if any saved filters require encoding
     * @method serializeTo
     * @private
     */
}

export { BasicFilter };
