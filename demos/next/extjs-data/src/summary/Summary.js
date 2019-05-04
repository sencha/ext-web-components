import {
    Base, Factoryable,
    define, copy
} from '../../../extjs-core/src';

/**
 * The base class for calculating data summaries. The summary is calculated using the 
 * {@link #method!calculate} method. This is overridden in subclasses.
 */
@define({
    mixins: [
        Factoryable
    ],
    
    alias: 'summary.base',  // also configures Factoryable

    factory: {
        cacheable: true,
        functionProperty: 'calculate'
    }
})
class Summary extends Base {
    construct (config) {
        let calculate = config && config.calculate;

        if (calculate) {
            config = copy({}, config);
            delete config.calculate;
            this.calculate = calculate;
        }
        
        super.construct(config);
    }

    /**
     * This method calculates the summary value of the given records.
     * @param {Model[]/Object[]} records The records to aggregate.
     * @param {String} property The property to aggregate on.
     * @param {String} root The root to extra the data from.
     * @param {Number} begin The starting index to calculate from.
     * @param {Number} end The index at which to stop calculating. The item at this
     * index will *not* be included in the calculation.
     *
     * @return {Object} The calculated summary value.
     * @method calculate
     */

    /**
     * Extract the underlying value from the data object.
     * @param {Model} record The record.
     * @param {String} property The property to extract.
     * @param {String} root The root on the data object.
     * @return {Object} The value.
     *
     * @protected
     */
    extractValue (record, property, root) {
        return record && (root ? record[root] : record)[property];
    }
}

// Base.Factory.on('summary', (factory, config) => {
//     if (typeof config === 'function') {
//         if (config.isClass) {
//             return new config();
//         }
//
//         return factory({
//             calculate: config
//         });
//     }
//     // by not returning anything, the normal factory logic is applied
// });

export { Summary };
