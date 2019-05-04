import {
    assert, config, copy, define, is
} from '../../../extjs-core/src';

import { Filter } from './Filter';
import { Collection } from './Collection';

/**
 * This class provides a flexible means to control the
 * `{@link Ext.util.Collection#cfg!filters filters}` of a
 * `{@link Ext.util.Collection Collection}`. Instances of this class are created
 * automatically when filters are added to added to Collections.
 *
 * This collection can be directly manipulated by application code to gain full
 * control over the filters of the owner collection. Be aware that some components
 * create filters internally (such as `Ext.form.field.ComboBox` and the
 * `Ext.grid.filters.Filters` plugin) so be careful in such cases to not disturb
 * these additional filters.
 *
 * Items in this collection are `Ext.util.Filter` instances and can be managed
 * individually by their `id`. This is the recommended way to manage application
 * filters while preserving filters applied from other sources.
 *
 * Bulk changes to this collection should be wrapped in
 * `{@link Ext.util.Collection#method!beginUpdate beginUpdate}` and
 * `{@link Ext.util.Collection#method!endUpdate endUpdate}` (as with any collection).
 * During these bulk updates all reactions to filter changes will be suspended.
 */
@define({
    prototype: {
        /**
         * @property filterFn
         * This is the cached filter function.
         * @readonly
         */
        filterFn: null
    }
})
class FilterCollection extends Collection {
    @config
    decoder = function (...args) {
        return this.decodeFilter(...args);
    };
    
    ctor () {
        let me = this;
        
        // Because this closure operates on the collection, we are able to use it for as
        // long as we have the Collection instance.
        me.filterFn = Filter.createFilterFn(me);

        // Odd thing this. We may have a master Collection that wants to centralize things
        // (like rootProperty) so we need to delegate to it instead of using our own
        // configs...
        me.$master = me;
    }

    /**
     * This method will filter an array based on the currently configured `filters`.
     * @param {Array} data The array you want to have filtered.
     * @return {Array} The array you passed after it is filtered.
     */
    filterData (data) {
        return this.filtered ? data.filter(this.filterFn) : data;
    }

    /**
     * Returns the filter function.
     * @return {Function} The filter function.
     */
    getFilterFn () {
        return this.filterFn;
    }

    isItemFiltered (item) {
        return !this.filterFn(item);
    }

    /**
     * returns the number of *enabled* filters in this `FilterCollection`
     * @returns {Number}
     */
    getFilterCount () {
        let filters = this.items;
        let len = filters.length;
        let i;

        for (i = len - 1; i >= 0; i--) {
            if (filters[i].disabled) {
                len--;
            }
        }
        
        return len;
    }

    //-------------------------------------------------------------------------
    // Private

    decodeFilter (filter) {
        let options = this.$master;
        let filterRoot = options.rootProperty;
        let filterConfig;

        if (filter.isFilter) {
            filter.root = filterRoot;
        }
        else {
            filterConfig = {
                root: filterRoot
            };

            if (is.callable(filter)) {
                filterConfig.filterFn = filter;
            }
            // If we are dealing with an object, we assume its a Filter configuration. In
            // this case we create an instance of Ext.util.Filter passing the config.
            else {
                // Finally we get to the point where it has to be invalid
                // <debug>
                assert(filter && typeof filter === 'object',
                       'Invalid filter specified: {0}', filter);
                // </debug>

                filterConfig = copy(filterConfig, filter);

                if (filterConfig.fn) {
                    filterConfig.filterFn = filterConfig.fn;
                    delete filterConfig.fn;
                }
            }

            filter = new Filter(filterConfig);
        }

        return filter;
    }

    decodeRemoveItems (item, moreItems) {
        let me = this;
        let items = me.decodeItemArgs(item, moreItems)[0];
        let currentFilters, filter, isProp, match, n, result, type;

        if (!items || !items.$decoded) {
            currentFilters = me.items;
            result = [];
            // let filter, isFunction, isProp, isString, item, match, n, type;

            for (filter of items) {
                if (filter && filter.isFilter) {
                    result.push(filter);
                }
                else {
                    type = typeof filter;
                    isProp = filter.property !== undefined && filter.value !== undefined;

                    //<debug>
                    assert(type === 'function' || type === 'string' || isProp,
                           'Invalid filter specification: {0}', filter);
                    //</debug>

                    for (n = currentFilters.length; n-- > 0; /* empty */) {
                        item = currentFilters[n];
                        match = false;

                        if (type === 'string') {
                            match = item.property === filter;
                        }
                        else if (type === 'function') {
                            match = item.getFilterFn() === filter;
                        }
                        else if (isProp) {
                            match = item.property === filter.property &&
                                    item.value === filter.value;
                        }

                        if (match) {
                            result.push(item);
                            break;
                        }
                    }
                }
            }

            items = result;
            items.$decoded = true;
        }

        return items;
    }
}

export { FilterCollection };
