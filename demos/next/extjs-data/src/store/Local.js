import { Base, define, config, arrayify, remove } from '../../../extjs-core/src';

import { Collection } from '../../../extjs-util/src/collection';

import { StoreGroup } from './Group';

/**
 * A mixin that provides common store methods for Store & Ext.data.ChainedStore.
 * @private
 */
@define({
    //
})
class LocalStore extends Base {
    @config
    extraKeys = null;

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // extraKeys
    
    applyExtraKeys (extraKeys) {
        let indexName;
        let data = this.data;

        // Add the extra keys to the data collection
        data.extraKeys = extraKeys;

        // Pluck the extra keys out so that we can keep them by index name
        extraKeys = data.extraKeys;

        for (indexName in extraKeys) {
            this[indexName] = extraKeys[indexName];
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Adds `record` to the Store. This method accepts either:
     *
     * - An array of records or record data objects.
     * - Any number of records or record data objects arguments.
     *
     * The new records will be added at the end of the existing collection.
     *
     * Sample usage:
     *
     *     myStore.add({some: 'data'}, {some: 'other data'});
     *
     * Note that if this Store is sorted, the new records will be inserted at the correct
     * point in the Store to maintain the sort order.
     *
     * @param {Model[]/Model.../Object[]/Object...} record An array of records or data
     * objects, or variable number of record or config arguments.
     * @return {Model[]}
     */
    add (record) {
        return this.insert(this.size, arguments.length === 1 ? record : arguments);
    }

    /**
     * Runs the aggregate function for all the records in the store.
     *
     * When store is filtered, only items within the filter are aggregated.
     *
     * @param {Function} fn The function to execute. The function is called with a single parameter,
     * an array of records for that group.
     * @param {Object} [scope] The scope to execute the function in. Defaults to the store.
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the group
     * name and the group average being the value. The grouped parameter is only honored if
     * the store has a grouper.
     * @param {String} field The field to get the value from
     * @return {Object} An object literal with the group names and their appropriate values.
     */
    aggregate (fn, scope, grouped, field) {
        let me = this;
        let groups, out, group;
        
        if (grouped && me.grouped) {
            groups = me.groups.items;
            out = {};

            for (group of groups) {
                out[group.groupKey] = me.getAggregate(fn, scope || me, group.items, field);
            }
        }
        else {
            out = me.getAggregate(fn, scope, me.data.items, field);
        }
        
        return out;
    }

    /**
     * Gets the average value in the store.
     *
     * When store is filtered, only items within the filter are aggregated.
     *
     * @param {String} field The field in each record
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the group
     * name and the group average being the value. The grouped parameter is only honored if
     * the store has a grouper.
     * @return {Object} The average value, if no items exist, 0.
     */
    average (field, grouped) {
        let data = this.data;
        
        return (grouped && this.grouped) ? data.averageByGroup(field) : data.average(field);
    }

    /**
     * Collects unique values for a particular dataIndex from this store.
     *
     * Note that the `filtered` option can also be passed as a separate parameter for
     * compatibility with previous versions.
     *
     *     var store = Ext.create('Store', {
     *         fields: ['name'],
     *         data: [{
     *             name: 'Larry'
     *         }, {
     *             name: 'Darryl'
     *         }, {
     *             name: 'Darryl'
     *         }]
     *     });
     *
     *     store.collect('name');
     *     // returns ["Larry", "Darryl"]
     *
     * @param {String} property The property to collect
     * @param {Object} [includeOptions] An object which contains options which modify how
     * the store is traversed. For compatibility, this argument may be the `allowNull`
     * value itself. If so, the next argument is the `filtered` value.
     * @param {Boolean} [includeOptions.allowNull] Pass true to allow null, undefined or
     * empty string values.
     * @param {Boolean} [includeOptions.filtered] Pass `true` to collect from all records,
     * even ones which are filtered.
     * @param {Boolean} [filtered] This argument only applies when the legacy call form
     * is used and `includeOptions` is actually the `allowNull` value.
     *
     * @return {Object[]} An array of the unique values
     */
    collect (property, includeOptions, filtered) {
        let me = this;
        let allowNull = includeOptions;
        let data = me.data;
        
        if (typeof includeOptions === 'object') {
            filtered = includeOptions.filtered;
            allowNull = includeOptions.allowNull;
        }

        if (filtered && data.filtered) {
            data = data.source;
        }

        return data.collect(property, 'data', allowNull);
    }

    contains (record) {
        return this.indexOf(record) > -1;
    }
    
    /**
     * Gets the count of items in the store.
     *
     * When store is filtered, only items within the filter are counted.
     *
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the
     * group name and the count for each group being the value. The grouped parameter is
     * only honored if the store has a grouper.
     * @return {Number} the count
     */
    count (grouped) {
        let data = this.data;
        
        return (grouped && this.grouped) ? data.countByGroup() : data.count();
    }

    /**
     * Calls the specified function for each {@link Model record} in the store.
     *
     * When store is filtered, only loops over the filtered records.
     *
     * @param {Function} fn The function to call. The {@link Model Record} is passed
     * as the first parameter. Returning `false` aborts and exits the iteration.
     * @param {Object} [scope] The scope (`this` reference) in which the function is executed.
     * Defaults to the current {@link Model record} in the iteration.
     * @param {Object/Boolean} [includeOptions] An object which contains options which
     * modify how the store is traversed. Or simply the `filtered` option.
     * @param {Boolean} [includeOptions.filtered] Pass `true` to include filtered out
     * nodes in the iteration.
     */
    each (fn, scope, includeOptions) {
        let data = this.data;
        let bypassFilters = includeOptions;
        let len, record, i;

        if (typeof includeOptions === 'object') {
            bypassFilters = includeOptions.filtered;
        }

        if (bypassFilters && data.filtered) {
            data = data.source;
        }
        
        data = data.items.slice(0); // safe for re-entrant calls
        len = data.length;

        for (i = 0; i < len; ++i) {
            record = data[i];
            
            if (fn.call(scope || record, record, i, len) === false) {
                break;
            }
        }
    }

    /**
     * Returns the first record in the store.
     *
     * When store is filtered, will return first item within the filter.
     *
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the
     * group name and the first record being the value. The grouped parameter is only
     * honored if the store has a grouper.
     * @return {Model}
     */
    first (grouped) {
        return this.data.first(grouped) || null;
    }
    
    /**
     * Returns the record with the specified id or `null`.
     *
     * This method is not affected by filtering, lookup will be performed from all records
     * inside the store, filtered or not.
     *
     * @param id The id of the record to find.
     * @return {Model}
     */
    getById (id) {
        let data = this.data;
        
        if (data.filtered) {
            data = data.source;
        }
        
        return data.get(id) || null;
    }

    /**
     * Get the summary record for this store. See {@link Model#summary}.
     * @return {Model}
     */
    getSummaryRecord () {
        let me = this;
        let summaryRecord = me.summaryRecord;
        let data = me.data;
        let generation = data.generation;
        let T;

        if (!summaryRecord) {
            T = me.model.summaryModel;
            me.summaryRecord = summaryRecord = new T();
        }

        if (!summaryRecord.isRemote && summaryRecord.summaryGeneration !== generation) {
            summaryRecord.summarize(data.items);
            summaryRecord.summaryGeneration = generation;
        }

        return summaryRecord;
    }

    /**
     * Get the index of the record within the store.
     *
     * When store is filtered, records outside of filter will not be found.
     *
     * @param {Model} record The Model object to find.
     * @return {Number} The index of the passed Record. Returns -1 if not found.
     */
    indexOf (record) {
        return this.data.indexOf(record);
    }

    /**
     * Get the index within the store of the Record with the passed id.
     *
     * Like #indexOf, this method is affected by filtering.
     *
     * @param {String} id The id of the Record to find.
     * @return {Number} The index of the Record. Returns -1 if not found.
     */
    indexOfId (id) {
        return this.indexOf(this.getById(id));
    }

    /**
     * Inserts records into the Store at the given index and fires the add event.
     * See also {@link #method!add}.
     *
     * @param {Number} index The start index at which to insert the passed records.
     * @param {Model/Model[]/Object/Object[]} records A record, the data object for a
     * record or an array of either of these.
     * 
     * @return {Model[]}
     */
    insert (index, records) {
        let ret = [];
        let rec;
        
        if (records) {
            for (rec of arrayify(records)) {
                ret.push(this.constructRecord(rec));
            }
            
            this.data.insert(index, ret);
        }
        
        return ret;
    }

    /**
     * Returns the last record in the store.
     *
     * When store is filtered, will return last item within the filter.
     *
     * @param {Boolean} [grouped] True to perform the operation for each group in the
     * store. The value returned will be an object literal with the key being the group
     * name and the last record being the value. The grouped parameter is only honored if
     * the store has a grouper.
     * @return {Model}
     */
    last (grouped) {
        return this.data.last(grouped) || null;
    }

    /**
     * Gets the maximum value in the store.
     *
     * When store is filtered, only items within the filter are aggregated.
     *
     * @param {String} field The field in each record
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the
     * group name and the maximum in the group being the value. The grouped parameter is
     * only honored if the store has a grouper.
     * @return {Object} The maximum value, if no items exist, undefined.
     */
    max (field, grouped) {
        let data = this.data;
        
        return (grouped && this.grouped) ? data.maxByGroup(field) : data.max(field);
    }

    /**
     * Gets the minimum value in the store.
     *
     * When store is filtered, only items within the filter are aggregated.
     *
     * @param {String} field The field in each record
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the
     * group name and the minimum in the group being the value. The grouped parameter is
     * only honored if the store has a grouper.
     * @return {Object} The minimum value, if no items exist, undefined.
     */
    min (field, grouped) {
        let data = this.data;
        
        return (grouped && this.grouped) ? data.minByGroup(field) : data.min(field);
    }

    /**
     * Query all the cached records in this Store by name/value pair.
     * The parameters will be used to generated a filter function that is given
     * to the queryBy method.
     *
     * This method complements queryBy by generating the query function automatically.
     *
     * This method is not affected by filtering, it will always search *all* records in the store
     * regardless of filtering.
     *
     * @param {String} property The property to create the filter function for
     * @param {String/RegExp} value The string/regex to compare the property value to
     * @param {Boolean} [anyMatch=false] True to match any part of the string, not just the
     * beginning.
     * @param {Boolean} [caseSensitive=false] `true` to create a case-sensitive regex.
     * @param {Boolean} [exactMatch=false] True to force exact match (^ and $ characters
     * added to the regex). Ignored if `anyMatch` is `true`.
     * @return {Collection} The matched records
     */
    query (property, value, anyMatch, caseSensitive, exactMatch) {
        let data = this.getDataSource();

        return data.createFiltered(property, value, anyMatch, caseSensitive, exactMatch);
    }

    /**
     * Query all the cached records in this Store using a filtering function. The specified function
     * will be called with each record in this Store. If the function returns `true` the record is
     * included in the results.
     *
     * This method is not affected by filtering, it will always search *all* records in the store
     * regardless of filtering.
     *
     * @param {Function} fn The function to be called. It will be passed the following parameters:
     *  @param {Model} fn.record The record to test for filtering. Access field values
     *  using {@link Model#get}.
     *  @param {Object} fn.id The ID of the Record passed.
     * @param {Object} [scope] The scope (this reference) in which the function is executed
     * Defaults to this Store.
     * @return {Collection} The matched records
     */
    queryBy (fn, scope) {
        let data = this.getDataSource();

        return data.createFiltered(fn, scope);
    }

    /**
     * Sums the value of `field` for each {@link Model record} in store
     * and returns the result.
     *
     * When store is filtered, only sums items within the filter.
     *
     * @param {String} field A field in each record
     * @param {Boolean} [grouped] True to perform the operation for each group
     * in the store. The value returned will be an object literal with the key being the
     * group name and the sum for that group being the value. The grouped parameter is
     * only honored if the store has a grouper.
     * @return {Number} The sum
     */
    sum (field, grouped) {
        let data = this.data;
        
        return (grouped && this.grouped) ? data.sumByGroup(field) : data.sum(field);
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    addObserver (observer) {
        let observers = this.observers || (this.observers = []);

        if (!observers.includes(observer)) {
            observers.push(observer);
        }
    }

    callObservers (action, args) {
        let me = this;
        let observers = me.observers;
        let methodName, observer;
        
        if (observers) {
            if (args) {
                args.unshift(me);
            }
            else {
                args = [me];
            }
            
            for (observer of observers) {
                methodName = 'onSource' + action;
                
                if (observer[methodName]) {
                    observer[methodName].apply(observer, args);
                }
            }
        }
    }

    constructDataCollection () {
        let me = this;
        let result = new Collection({
            rootProperty: 'data',
            groupDefaults: {
                xclass: StoreGroup,
                store: me
            }
        });
        
        result.$ownerStore = me;

        // Add this store as an observer immediately so that we are informed of any
        // synchronous autoLoad which may occur in this event.
        result.addObserver(me);
        
        return result;
    }

    /**
     * Converts a data object to a record.
     * @param {Object/Model} data The data object or record.
     * @return {Model}
     * @private
     */
    constructRecord (data) {
        return data.isModel ? data : new this.model(data, this.session);
    }

    createFiltersCollection () {
        return this.data.getFilters();
    }

    createSortersCollection () {
        let sorters = this.data.getSorters();
        
        sorters.sorterPolicy = sorter => this.configureSorterByField(sorter);
        
        return sorters;
    }
    
    forceLocalSort () {
        let sorters = this.getSorters();

        // Sorter collection must inform all interested parties.
        // We cannot just tell our data Collection to react - there
        // may be GroupCollections hooked into the endUpdate call.
        sorters.beginUpdate();
        sorters.endUpdate();
    }

    getAggregate (fn, scope, records, field) {
        let values = [];
        let len = records.length;
        let i;

        // TODO EXTJSIV-12307 - not the right way to call fn
        for (i = 0; i < len; ++i) {
            values[i] = records[i].get(field);
        }
        
        return fn.call(scope || this, records, values);
    }

    /**
     * Get the Record with the specified internalId.
     *
     * This method is not affected by filtering, lookup will be performed from all records
     * inside the store, filtered or not.
     *
     * @param internalId The id of the Record to find.
     * @return {Model} The Record with the passed internalId. Returns null if not found.
     * @private
     */
    getByInternalId (internalId) {
        let data = this.data;
        let keyCfg;

        if (data.filtered) {
            if (!data.$hasExtraKeys) {
                keyCfg = this.makeInternalKeyCfg();
                data.extraKeys = keyCfg;
                data.$hasExtraKeys = true;
            }
            
            data = data.source;
        }

        if (!data.$hasExtraKeys) {
            data.extraKeys = keyCfg || this.makeInternalKeyCfg();
            data.$hasExtraKeys = true;
        }

        return data.byInternalId.get(internalId) || null;
    }

    /**
     * Returns the complete unfiltered collection.
     * @private
     */
    getDataSource () {
        let data = this.data;
        
        return data.source || data;
    }

    // isLast (record) {
    //     return record === this.last();
    // }

    makeInternalKeyCfg () {
        return {
            byInternalId: {
                property: '$iid',
                rootProperty: ''
            }
        };
    }

    notifySorterChange () {
        this.data.onSorterChange();
    }

    onCollectionBeginUpdate () {
        this.beginUpdate();
    }
    
    onCollectionEndUpdate () {
        this.endUpdate();
    }

    // When the collection informs us that it has filtered, this LocalStore must react.
    // AbstractStore#onFilterEndUpdate does the correct thing (fires a refresh) if remote sorting
    // is false
    onCollectionFilter () {
        this.onFilterEndUpdate();
    }

    // When the collection informs us that it has sorted, this LocalStore must react.
    // AbstractStore#onSorterEndUpdate does the correct thing (fires a refresh) if remote sorting
    // is false
    onCollectionSort () {
        this.onSorterEndUpdate();
    }

    removeObserver (observer) {
        remove(this.observers, observer);
    }
}

export { LocalStore };
