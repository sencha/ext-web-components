import {
    define, config,
    is, raise, remove
} from '../../../extjs-core/src';

import { arrayEquals } from '../../../extjs-util/src/Array';

import { ProxyStore } from './Proxy';
import { LocalStore } from './Local';
import { MemoryProxy } from '../proxy/Memory';

//mjg
import { Model } from '../model/Model';


/**
 * The Store class encapsulates a client side cache of {@link Model Model} objects.
 * Stores load data via a {@link Proxy Proxy}, and also provide functions
 * for {@link #method!sort sorting}, {@link #filter filtering} and querying the
 * {@link Model model} instances contained within it.
 *
 * Creating a Store is easy - we just tell it the Model and the Proxy to use for loading
 * and saving its data:
 *
 *      // Set up a model to use in our Store
 *      @define
 *      class User extends Model {
 *          @config
 *          static fields = [
 *              {name: 'firstName', type: 'string'},
 *              {name: 'lastName',  type: 'string'},
 *              {name: 'age',       type: 'int'},
 *              {name: 'eyeColor',  type: 'string'}
 *          ];
 *      }
 *
 *      let sore = new Store({
 *          model: User,
 *          autoLoad: true,
 *          proxy: {
 *              type: 'ajax',
 *              url: '/users.json',
 *              reader: {
 *                  type: 'json',
 *                  rootProperty: 'users'
 *              }
 *          }
 *      });
 *
 * In the example above we configured an AJAX proxy to load data from the url '/users.json'.
 * We told our proxy to use a {@link JsonReader} to parse the response from the server
 * into records (instances of the specified `Model` class).
 *
 * ## Inline data
 *
 * Stores can also load data inline. Internally, `Store` converts each of the objects we
 * pass in as {@link #cfg!data} into records:
 *
 *      let sore = new Store({
 *          model: User,
 *          data : [
 *              { firstName: 'Peter',   lastName: 'Venkman' },
 *              { firstName: 'Egon',    lastName: 'Spengler' },
 *              { firstName: 'Ray',     lastName: 'Stantz' },
 *              { firstName: 'Winston', lastName: 'Zeddemore' }
 *          ]
 *      });
 *
 * Loading inline data using the method above is great if the data is in the correct format
 * already (e.g. it doesn't need to be processed by a {@link Reader reader}). If your
 * inline data requires processing to decode the data structure, use a {@link MemoryProxy}
 * instead (see the * {@link MemoryProxy} docs for an example).
 *
 * Additional data can also be loaded locally using {@link #method!add}.
 * 
 * ## Dynamic Loading
 *
 * Stores can be dynamically updated by calling the {@link #method!load} method:
 *
 *     store.load({
 *         params: {
 *             group: 3,
 *             type: 'user'
 *         },
 *         callback (records, operation, success) {
 *             // do something after the load finishes
 *         }
 *     });
 *
 * Here a bunch of arbitrary parameters is passed along with the load request and a callback
 * function is set up to do something after the loading is over.
 *
 * ## Loading Nested Data
 *
 * Applications often need to load sets of associated data - for example a CRM system might
 * load a User and her Orders. Instead of issuing an AJAX request for the User and a series
 * of additional AJAX requests for each Order, we can load a nested dataset and allow the
 * Reader to automatically populate the associated models. Below is a brief example, see
 * the {@link Reader} intro docs for a full explanation:
 *
 *      let sore = new Store({
 *          model: User,
 *          autoLoad: true,
 *          proxy: {
 *              type: 'ajax',
 *              url: 'users.json',
 *              reader: {
 *                  type: 'json',
 *                  rootProperty: 'users'
 *              }
 *          }
 *      });
 *
 * Which would consume a response like this:
 *
 *      {
 *          "users": [{
 *              "id": 1,
 *              "name": "Peter",
 *              "orders": [{
 *                  "id": 10,
 *                  "total": 10.76,
 *                  "status": "invoiced"
 *             },{
 *                  "id": 11,
 *                  "total": 13.45,
 *                  "status": "shipped"
 *             }]
 *          }]
 *      }
 *
 * See the {@link Reader} intro docs for a full explanation.
 *
 * ## Filtering and Sorting
 *
 * Stores can be sorted and filtered - in both cases either remotely or locally. The
 * {@link #cfg!sorters} and {@link #cfg!filters} are held inside
 * {@link Collection Collection} instances to make them easy to manage. Usually it is
 * sufficient to either just specify sorters and filters in the Store configuration or call
 * {@link #method!sort} or {@link #filter}:
 *
 *      let sore = new Store({
 *          model: User,
 *          sorters: [{
 *              property: 'age',
 *              direction: 'DESC'
 *          }, {
 *              property: 'firstName',
 *              direction: 'ASC'
 *          }],
 *
 *          filters: [{
 *              property: 'firstName',
 *              value: /Peter/
 *          }]
 *      });
 *
 * The new Store will keep the configured sorters and filters in the Collection instances
 * mentioned above. By default, sorting and filtering are both performed locally by the
 * Store - see {@link #remoteSort} and {@link #remoteFilter} to allow the server to perform
 * these operations instead.
 *
 * Filtering and sorting after the Store has been instantiated is also easy. Calling
 * {@link #filter} adds another filter to the Store and automatically filters the dataset
 * (calling {@link #filter} with no arguments simply re-applies all existing filters).
 *
 *      store.filter('eyeColor', 'Brown');
 *
 * Change the sorting at any time by calling {@link #method!sort}:
 *
 *      store.sort('height', 'ASC');
 *
 * Note that all existing sorters will be removed in favor of the new sorter data (if
 * {@link #method!sort} is called with no arguments, the existing sorters are just reapplied
 * instead of being removed). To keep existing sorters and add new ones, just add them to
 * the Collection:
 *
 *      store.sorters.add(new Sorter({
 *          property : 'shoeSize',
 *          direction: 'ASC'
 *      }));
 *
 *      store.sort();
 *
 * ## Further Reading
 *
 * Stores are backed up by an ecosystem of classes that enables their operation. To gain a
 * full understanding of these pieces and how they fit together, see:
 *
 *   - {@link Proxy} - overview of what Proxies are and how they are used
 *   - {@link Model} - the core class in the data package
 *   - {@link Reader} - used by any subclass of
 *     {@link ServerProxy} to read a response
 */
@define({
    type: 'store',

    mixins: [
        LocalStore
    ],
    
    prototype: {
        /**
         * @property {Number} loadCount
         * The number of times records have been loaded into the store. This includes loads via
         * {@link #loadData} & {@link #loadRecords}.
         * @readonly
         */
        loadCount: 0,
        
        //------------------------------------------------
        // Private
    
        /**
         * Used as a parameter to loadRecords
         * @private
         */
        addRecordsOptions: {
            addRecords: true
        },

        /**
         * @property {Model} associatedEntity
         * The owner of this store if the store is used as part of an association.
         * @private
         */
        associatedEntity: null,

        commitOptions: {
            commit: true
        },
    
        /**
         * `true` once the store has loaded data from the server.
         * @property {Boolean} complete
         * @private
         */
        complete: false,

        inlineData: null,
    
        moveMapCount: 0,
    
        /**
         * @property {Role} role
         * The role for the {@link #associatedEntity}.
         * @private
         */
        role: null
    }
})
class Store extends ProxyStore {
    /**
     * @cfg {Object[]/Model[]/Collection} data
     * Array of records or data objects to load locally. See "Inline data" above for
     * details.
     */
    @config
    data = 0; // need the applier to be called initially
    
    /**
     * @cfg {Boolean} clearRemovedOnLoad
     * Set to `true` to clear anything in the {@link #removed} record collection when the
     * store loads.
     */
    @config
    clearRemovedOnLoad = true;
   
    /**
    * @cfg {Boolean} clearOnPageLoad
    * True to empty the store when loading another page via {@link #loadPage},
    * {@link #nextPage} or {@link #previousPage}. Setting to false keeps existing records,
    * allowing large data sets to be loaded one page at a time but rendered all together.
    */
    @config
    clearOnPageLoad = true;

    /**
     * @cfg {Session} session
     * The session for this store. By specifying a session, it ensures any records that are
     * added to this store are also included in the session. This store does not become a member
     * of the session itself.
     */
    @config
    session = null;
    
    //---------------------------------------------------------------------------------
    // Life-cycle

    setup () {
        // See applyData for the details.
        let me = this;
        let data = me.inlineData;
        
        if (data) {
            me.inlineData = null;
            me.loadInlineData(data);
        }
    }

    dtor () {
        let me = this;
        let data = me.data;
        
        // clearData ensures everything is unjoined
        me.clearData();
        me.session = null;
        me.observers = null;
        
        // Transfer ownership of any detached filters/sorters back to our Collection:
        me.remoteSort = false;
        me.remoteFilter = false;
        
        if (data && data.$ownerStore === me) {
            data.destroy();
        }
    }

    //---------------------------------------------------------------------------------
    // Special
    
    [Symbol.iterator] () {
        return this.data.items[Symbol.iterator]();
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)
    
    // data

    applyData (data, dataCollection) {
        // We bring up the Collection for records which forms the bottom of the config
        // dependency graph. The appliers for "filters" and "sorters" depend on "data"
        // and "remoteFilter" and "remoteSort" depend on both in their updaters.
        let me = this;

        // Ensure that we process our Model config first.
        me.getConfig('fields');
        me.getConfig('model');

        // We might be configured with a Collection instance
        if (data && data.isCollection) {
            data.rootProperty = 'data';

            dataCollection = data;
            dataCollection.addObserver(me);

            // Perform a load postprocess if the incoming collection is loaded.
            if (data.length) {
                me.afterLoadRecords(data.items);

                // This is not fired by afterLoadRecords because loadRecords
                // which calls afterLoadRecords is a public API which simply adds some
                // records. This situation here though, is anaologous to a load.
                if (!me.constructing) {
                    me.fireEvent('load', me, data.items, true);
                }
            }
        }
        else {
            if (!dataCollection) {
                dataCollection = me.constructDataCollection();
            }

            if (data) {
                if (me.constructing) {
                    // When data is configured on the instance of a Store we must wait for
                    // all the things to initialize (sorters, filters, groupers) so that
                    // we can properly process that data. All of those appliers, however,
                    // depend on the dataCollection (us) to get booted up first so we must
                    // defer this back to after initConfig.
                    me.inlineData = data;
                }
                else {
                    // If we are not constructing the Store than a setData call needs to
                    // be equivalent to the legacy loadData method with respect to events
                    // that fire, etc.
                    me.loadData(data);
                }
            }
        }

        return dataCollection;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)


    //mjg added
    isLoaded() {
      console.log('isLoaded')
      return true
    }

    hasPendingLoad() {
      console.log('hasPendingLoad')
      return false
    }

    getModel() {
      console.log('getModel')
      return Model
    }

    getCount() {
      console.log('getCount')
      return 10
    }

    getGrouper() {
      console.log('getGrouper')
      return null
      //return function () {}
    }

    getGroups() {
      console.log('getGroups')
      return ''
    }
    //mjg added



    /**
     * (Local sort only) Inserts the passed Record into the Store at the index where it
     * should go based on the current sort information.
     *
     * @param {Model} record
     */
    addSorted (record) {
        let me = this;
        let remote = me.remoteSort;
        let data = me.data;
        let index;
        
        if (remote) {
            data.sorters = me.getSorters();
        }
        
        index = data.findInsertionIndex(record);
        
        if (remote) {
            data.sorters = null;
        }

        return me.insert(index, record);
    }

    /**
     * Commits all Records with {@link #getModifiedRecords outstanding changes}. To handle
     * updates for changes, subscribe to the Store's {@link #event!update update event},
     * and perform updating when the third parameter is `'commit'`.
     */
    commitChanges () {
        let me = this;
        let recs = me.getModifiedRecords();
        let rec;

        me.beginUpdate();
        
        for (rec of recs) {
            rec.commit();
        }

        me.cleanRemoved();

        me.endUpdate();

        /**
         * @private
         * @event commit
         * Fired when all changes were committed and the Store is clean.
         *
         * **Note** Used internally.
         *
         * @param {Store} store The Store object
         */
        me.fireEvent('commit', me);
    }

    getNewRecords () {
        return this.filterDataSource(this.filterNew);
    }

    getRejectRecords () {
        return this.filterDataSource(this.filterRejects);
    }

    getUpdatedRecords () {
        return this.filterDataSource(this.filterUpdated);
    }

    /**
     * Loads an array of data straight into the Store.
     *
     * Using this method is great if the data is in the correct format already (e.g. it
     * doesn't need to be processed by a reader). If your data requires processing to
     * decode the data structure, use a {@link MemoryProxy} or {@link #loadRawData}.
     *
     * @param {Model[]/Object[]} data Array of data to load. Any non-records will be
     * promoted to records first.
     * @param {Boolean} [append=false] `true` to add the records to the existing records
     * in the store, `false` to remove the old ones first.
     */
    loadData (data, append) {
        let me = this;
        let newData = [];
        let item;

        // make sure each data element is a record
        for (item of data) {
            newData.push(me.constructRecord(item));
        }

        newData = me.processAssociation(newData);

        me.loadRecords(newData, append ? me.addRecordsOptions : undefined);
    }

    /**
     * Loads a given 'page' of data by setting the start and limit values appropriately.
     * Internally this just causes a normal load operation, passing in calculated 'start'
     * and 'limit' params.
     * @param {Number} page The number of the page to load.
     * @param {Object} [options] See options for {@link #method!load}.
     */
    loadPage (page, options) {
        let me = this;
        let size = me.pageSize;

        me.currentPage = page;

        // Copy options into a new object so as not to mutate passed in objects
        options = {
            page: page,
            start: (page - 1) * size,
            limit: size,
            addRecords: !me.clearOnPageLoad,

            ...options
        };

        me.read(options);
    }

    /**
     * Loads data via the bound Proxy's reader
     *
     * Use this method if you are attempting to load data and want to utilize the configured
     * data reader.
     *
     * As of 4.2, this method will no longer fire the {@link #event!load} event.
     *
     * @param {Object[]} data The full JSON object you'd like to load into the Data store.
     * @param {Boolean} [append=false] `true` to add the records to the existing records in
     * the store, `false` to remove the old ones first.
     * 
     * @return {Boolean} `true` if the reader processed the records correctly. See
     * {@link Reader#successProperty}. If the reader did not process the records,
     * nothing will be added.
     */
    loadRawData (data, append) {
        let me = this;
        let session = me.session;
        let result, records, success;
            
        /* eslint-disable-next-line max-len */
        result = me.proxy.reader.read(
            data, session ? { recordCreator: session.recordCreator } : undefined);

        records = result.records;
        success = result.success;

        if (success) {
            me.totalSize = result.total;
            me.loadRecords(records, append ? me.addRecordsOptions : undefined);
        }
        
        return success;
    }

    /**
     * Loads an array of {@link Model model} instances into the store, fires the
     * datachanged event. This should only usually be called internally when loading from
     * the {@link Proxy}, when adding records manually use {@link #method!add} instead.
     * @param {Model[]} records The array of records to load
     * @param {Object} [options]
     * @param {Boolean} [options.addRecords=false] Pass `true` to add these records to the
     * existing records, `false` to remove the Store's existing records first.
     */
    loadRecords (records, options) {
        let me = this;
        let data = me.data;
        let addRecords, skipSort;

        if (options) {
            addRecords = options.addRecords;
        }

        if (!me.remoteSort && !me.sortOnLoad) {
            skipSort = true;
            data.autoSort = false;
        }

        if (!addRecords) {
            me.clearData(true);
        }

        // Clear the flag AFTER the stores collection has been cleared down so that
        // observers of that collection know that it was due to a load, and a refresh is
        // imminent.
        me._loading = false;

        me.ignoreCollectionAdd = true;
        me.callObservers('BeforePopulate');
        data.add(records);
        me.ignoreCollectionAdd = false;

        if (skipSort) {
            data.autoSort = true;
        }

        me.afterLoadRecords(records);
    }

    /**
     * Loads the next 'page' in the current data set
     * @param {Object} options See options for {@link #method!load}
     */
    nextPage (options) {
        this.loadPage(this.currentPage + 1, options);
    }

    /**
     * Loads the previous 'page' in the current data set
     * @param {Object} options See options for {@link #method!load}
     */
    previousPage (options) {
        this.loadPage(this.currentPage - 1, options);
    }

    /**
     * {@link Model#reject Rejects} outstanding changes on all {@link #getModifiedRecords
     * modified records} and re-insert any records that were removed locally. Any phantom
     * records will be removed.
     */
    rejectChanges () {
        let me = this;
        let recs = me.getRejectRecords();
        let i, len, rec, toRemove, sorted, data, currentAutoSort;

        me.beginUpdate();
        
        for (rec of recs) {
            if (rec.phantom) {
                toRemove = toRemove || [];
                toRemove.push(rec);
            }
            else {
                rec.reject();
            }
        }

        if (toRemove) {
            me.remove(toRemove);
            
            for (rec of toRemove) {
                rec.reject();
            }
        }

        // Restore removed records back to their original positions.
        recs = me.getRawRemovedRecords();
        
        if (recs) {
            len = recs.length;
            sorted = !me.remoteSort && me.sorted;

            if (sorted) {
                // Temporarily turn off sorting so .reject() doesn't attempt to sort the
                // record. It would throw b/c the record isn't yet in its collection.
                data = me.data;
                currentAutoSort = data.autoSort;

                data.autoSort = false;
            }

            for (i = len - 1; i >= 0; i--) {
                rec = recs[i];
                rec.reject();

                if (!sorted) {
                    me.insert(rec.removedFrom || 0, rec);
                }
            }

            if (sorted) {
                // Turn sorting back on so the collection is auto-sorted when added.
                data.autoSort = currentAutoSort;
                me.add(recs);
            }

            // Don't need to call cleanRemoved because we've re-added everything, don't
            // need to unjoin the store
            recs.length = 0;
        }
        
        me.endUpdate();

        /**
         * @event reject
         * Fired when all changes were rejected and the Store is clean.
         *
         * **Note** Used internally.
         *
         * @param {Store} store The Store object
         * @private
         */
        me.fireEvent('reject', me);
    }

    /**
     * Removes the specified record(s) from the Store, firing the {@link #event!remove}
     * event for the removed records.
     *
     * After all records have been removed a single `datachanged` is fired.
     *
     * @param {Model/Model[]/Number/Number[]} records The record or array of records to
     * remove or an array of indices from which to remove records.
     * @param isMove (private)
     * @param silent (private)
     */
    remove (records, isMove, silent) {
        let me = this;
        let data = me.getDataSource();
        let len, toRemove, record;

        if (records) {
            if (!records.isModel) {
                toRemove = [];
                
                for (record of records) {
                    if (record && record.isModel) {
                        if (!data.contains(record)) {
                            continue;
                        }
                    }
                    else if (!(record = data.getAt(record))) { // an index
                        continue;
                    }

                    toRemove.push(record);
                }

                len = toRemove.length;
            }
            else if (data.indexOf(records) > -1) {
                toRemove = [records];

                len = 1;
            }
            else {
                len = 0;
            }
        }

        if (!len) {
            return [];
        }

        me.removeIsMove = !!isMove;
        me.removeIsSilent = silent;
        data.remove(toRemove);
        me.removeIsSilent = false;
        
        return toRemove;
    }

    /**
     * Removes all unfiltered items from the store.  Filtered records will not be removed.
     * Individual record `{@link #event!remove}` events are not fired by this method.
     *
     * @param {Boolean} [silent=false] Pass `true` to prevent the `{@link #event!clear}`
     * event from being fired.
     * @return {Model[]} The removed records.
     */
    removeAll (silent) {
        let me = this;
        let data = me.data;
        let records = data.getRange();

        // We want to remove and mute any events here
        if (data.length) {
            // Explicit true here, we never want to fire remove events
            me.removeIsSilent = true;
            me.callObservers('BeforeRemoveAll');
            data.removeAll();
            me.removeIsSilent = false;
            
            if (!silent) {
                me.fireEvent('clear', me, records);
                me.fireEvent('dataChanged', me);
            }
            
            me.callObservers('AfterRemoveAll', [!!silent]);
        }
        
        return records;
    }

    /**
     * Removes the one or more records at the given index.
     * @param {Number} index The record index.
     * @param {Number} [count=1] The number of records to delete.
     */
    removeAt (index, count) {
        let data = this.data;

        // Sanity check input.
        index = Math.max(index, 0);

        if (index < data.length) {
            data.removeAt(index, count);
        }
    }

    /**
     * Make a set of records be current in the store. This means that unneeded records
     * will be removed and new records will be added.
     * @param {Model[]} records The records to be current in the store.
     *
     * @private
     */
    setRecords (records) {
        let me = this;
        let size = me.size;

        ++me.loadCount;
        
        if (size) {
            me.data.splice(0, size, records);
        }
        else {
            me.add(records);
        }
    }

    /**
     * This method is basically the same as the JavaScript Array splice method.
     *
     * Negative indexes are interpreted starting at the end of the collection. That is,
     * a value of -1 indicates the last item, or equivalent to `length - 1`.
     *
     * @param {Number} index The index at which to add or remove items.
     * @param {Number/Object[]} toRemove The number of items to remove or an array of the
     * items to remove.
     * @param  {Object[]} [toAdd] The items to insert at the given `index`.
     * @private
     */
    splice (index, toRemove, toAdd) {
        return this.data.splice(index, toRemove, toAdd);
    }

    //---------------------------------------------------------------------------------
    // Internal

    afterChange (record, modifiedFieldNames, type) {
        this.data.itemChanged(record, modifiedFieldNames || null, undefined, type);
    }

    afterCommit (record, modifiedFieldNames) {
        this.afterChange(record, modifiedFieldNames, 'commit');
    }

    afterDrop (record) {
        this.data.remove(record);
    }

    afterEdit (record, modifiedFieldNames) {
        this.needsSync = this.needsSync || record.dirty;
        this.afterChange(record, modifiedFieldNames, 'edit');
    }

    afterErase (record) {
        this.removeFromRemoved(record);
    }

    afterLoadRecords (records) {
        let me = this;
        let rec;

        for (rec of records) {
            rec.join(me);
        }

        if (!me.isEmptyStore) {
            ++me.loadCount;
            me.complete = true;
        }
        
        if (me.hasListeners.datachanged) {
            me.fireEvent('dataChanged', me);
        }
        
        if (me.hasListeners.refresh) {
            me.fireEvent('refresh', me);
        }
        
        me.callObservers('AfterPopulate');
    }

    afterReject (record) {
        this.afterChange(record, null, 'reject');
    }

    attachSummaryRecord (resultSet) {
        if (!resultSet) {
            return;
        }
        
        /* eslint-disable-next-line vars-on-top */
        let me = this;
        let summary = resultSet.summaryData;
        let grouper = me.grouper;
        let current = me.summaryRecord;
        let commitOptions = me.commitOptions;
        let groups, rec, group;

        if (summary) {
            if (current) {
                current.set(summary.data, commitOptions);
            }
            else {
                me.summaryRecord = summary;
                summary.isRemote = true;
            }
        }

        if (grouper) {
            summary = resultSet.groupData;
            
            if (summary) {
                groups = me.groups;
                
                for (rec of summary) {
                    group = groups.getItemGroup(rec);
                    
                    if (group) {
                        current = group.summaryRecord;
                        
                        if (current) {
                            current.set(rec.data, commitOptions);
                        }
                        else {
                            group.summaryRecord = rec;
                            rec.isRemote = true;
                        }
                    }
                }
            }
        }
    }

    /**
     * @private
     */
    clearData (isLoad) {
        let me = this;
        let removed = me.removed;
        let data = me.getDataSource();
        let clearRemovedOnLoad = me.clearRemovedOnLoad;
        let needsUnjoinCheck = removed && isLoad && !clearRemovedOnLoad;
        let records, record;

        // We only have to do the unjoining if not buffered. PageMap will unjoin its records when
        // it clears itself.
        // There is a potential for a race condition in stores configured with autoDestroy: true;
        // if loading was initiated but didn't complete by the time the store is destroyed,
        // the data MC may not have been created yet so we have to check for its existence
        // here and below.
        if (data) {
            records = data.items;
            
            for (record of records) {
                if (!needsUnjoinCheck || !removed.includes(record)) {
                    record.unjoin(me);
                }
            }
            
            me.ignoreCollectionRemove = true;
            me.callObservers('BeforeClear');
            data.removeAll();
            me.ignoreCollectionRemove = false;
            me.callObservers('AfterClear');
        }

        if (removed && (!isLoad || clearRemovedOnLoad)) {
            removed.length = 0;
        }
    }

    /**
     * Similar to a load, however no records are added to the store. This is useful
     * in allowing the developer to decide what to do with the new records.
     * @param {Object} [options] See {@link #method!load load options}.
     *
     * @private
     */
    fetch (options) {
        let opt = this.setLoadOptions({
            type: 'read',
            ...options
        });
        let operation = this.createOperation(opt);
        
        operation.execute();
    }

    filterDataSource (fn) {
        let source = this.getDataSource();
        let items = source.items;
        let ret = [];
        let item;

        for (item of items) {
            if (fn.call(source, item)) {
                ret.push(item);
            }
        }

        return ret;
    }

    filterRejects (item) {
        return item.phantom || item.dirty;
    }

    fireChangeEvent (record) {
        return this.getDataSource().contains(record);
    }

    /**
     * Checks whether records are being moved within the store. This can be used in conjunction
     * with the {@link #event!add} and {@link #event!remove} events to determine whether
     * the records are being removed/added or just having the position changed.
     * @param {Model[]/Model} [records] The record(s).
     * @param {Object} [getMap] (private)
     * @return {Number} The number of records being moved. `0` if no records are moving.
     * If records are passed the number will refer to how many of the passed records are moving.
     *
     * @private
     */
    isMoving (records, getMap) {
        let map = this.moveMap;
        let moving = 0;
        let rec;

        if (map) {
            if (records) {
                if (is.array(records)) {
                    for (rec of records) {
                        moving += map[rec.id] ? 1 : 0;
                    }
                }
                else if (map[records.id]) {
                    ++moving;
                }
            }
            else {
                moving = getMap ? map : this.moveMapCount;
            }
        }
        
        return moving;
    }

    loadInlineData (data) {
        let me = this;
        let proxy = me.proxy;

        if (proxy && proxy.isMemoryProxy) {
            proxy.data = data;

            // Allow a memory proxy to trigger a load initially
            me.suspendEvents();
            me.read();
            me.resumeEvents();
        }
        else {
            // We make it silent because we don't want to fire a refresh event
            me.removeAll(true);

            // We don't want to fire addrecords event since we will be firing
            // a refresh event later which will already take care of updating
            // any views bound to this store
            me.suspendEvents();
            me.loadData(data);
            me.resumeEvents();
        }
    }

    onBeforeLoad (operation) {
        this.callObservers('BeforeLoad', [operation]);
    }
    
    onCollectionAdd (collection, info) {
        this.loadCount = this.loadCount || 1;

        this.onCollectionAddItems(collection, info.items, info);
    }

    onCollectionAddItems (collection, records, info) {
        let me = this;
        let lastChunk = info ? !info.next : false;

        // Must use class-specific removed property.
        // Regular Stores add to the "removed" property on remove.
        // TreeStores are having records removed all the time; node collapse removes.
        // TreeStores add to the "removedNodes" property onNodeRemove
        let removed = me.removed;
        let ignoreAdd = me.ignoreCollectionAdd;
        let session = me.session;
        let replaced = info && info.replaced;
        let sync, record, replacedItems;

        // Collection add changes the items reference of the collection, and that array
        // object if directly referenced by Ranges. The ranges have to refresh themselves
        // upon add.
        if (me.activeRanges) {
            me.syncActiveRanges();
        }

        for (record of records) {
            if (session) {
                session.adopt(record);
            }
            
            // If ignoring, we don't want to do anything other than pull
            // the added records into the session    
            if (!ignoreAdd) {
                record.join(me);
                
                if (removed && removed.length) {
                    remove(removed, record);
                }
                
                sync = sync || record.phantom || record.dirty;
            }
        }

        if (ignoreAdd) {
            return;
        }

        if (replaced) {
            replacedItems = [];

            do {
                replacedItems.push(...replaced.items);
                replaced = replaced.next;
            } while (replaced);

            me.setMoving(replacedItems, true);
        }
        
        if (info) {
            // If this is a replacement operation, there will have been a
            // previous call to onCollectionRemove which will have fired no
            // events in anticipation of a final refresh event.
            // Here is where we inform interested parties of all the changes.
            if (info.replaced) {
                if (lastChunk) {
                    me.fireEvent('dataChanged', me);
                    me.fireEvent('refresh', me);
                }
            }
            else {
                me.fireEvent('add', me, records, info.at);
                
                // If there is a next property, that means there is another range that needs
                // to be removed after this. Wait until everything is gone before firing
                // datachanged since it should be a bulk operation
                if (lastChunk) {
                    me.fireEvent('dataChanged', me);
                }
            }
        }

        if (replacedItems) {
            me.setMoving(replacedItems, false);
        }

        // Addition means a sync is needed.
        me.needsSync = me.needsSync || sync;
    }

    onCollectionBeforeItemChange (collection, info) {
        let record = info.item;
        let modifiedFieldNames = info.modified || null;
        let type = info.meta;

        // This is currently intended to be private
        this.fireEvent('beforeUpdate', this, record, type, modifiedFieldNames, info);
    }

    onCollectionFilterAdd (collection, items) {
        this.onCollectionAddItems(collection, items);
    }

    // If our source collection informs us that a filtered out item has changed, we must still
    // fire the events...
    onCollectionFilteredItemChange (...args) {
        this.onCollectionItemChange(...args);
    }

    onCollectionItemChange (collection, info) {
        let me = this;
        let record = info.item;
        let modifiedFieldNames = info.modified || null;
        let type = info.meta;

        if (me.fireChangeEvent(record)) {
            // Inform any interested parties that a record has been mutated.
            // This will be invoked on TreeStores in which the invoking record is an
            // descendant of a collapsed node, and so *will not be contained by this store
            me.onUpdate(record, type, modifiedFieldNames, info);
            me.fireEvent('update', me, record, type, modifiedFieldNames, info);
            me.fireEvent('dataChanged', me);
        }
    }

    onCollectionRemove (collection, info) {
        let me = this;
        // Must use class-specific removed property.
        // Regular Stores add to the "removed" property on remove.
        // TreeStores are having records removed all the time; node collapse removes.
        // TreeStores add to the "removedNodes" property onNodeRemove
        let removed = me.removed;
        let records = info.items;
        let len = records.length;
        let index = info.at;
        let replacement = info.replacement;
        let isMove = me.removeIsMove ||
            (replacement && arrayEquals(records, replacement.items));
        let silent = me.removeIsSilent;
        let lastChunk = !info.next;
        let data = me.getDataSource();
        let i, record;
        
        if (me.ignoreCollectionRemove) {
            return;
        }

        if (replacement) {
            me.setMoving(replacement.items, true);
        }
        
        for (i = len - 1; i >= 0; i--) {
            record = records[i];

            // If the data contains the record, that means the record is filtered out, so
            // it's not being removed, nor should it be unjoined
            if (!data.contains(record)) {
                // Don't push interally moving, or phantom (client side only), 
                // erasing (informing server through its own proxy) records
                if (removed && !isMove && !record.phantom && !record.erasing) {
                    // Store the index the record was removed from so that rejectChanges
                    // can re-insert at the correct place.
                    // The record's index property won't do, as that is the index in the
                    // overall dataset when Store is buffered.
                    record.removedFrom = index + i;
                    removed.push(record);

                    // Removal of a non-phantom record which is NOT erasing (informing the
                    // server through its own proxy) requires that the store be synced at
                    // some point.
                    me.needsSync = true;
                }
                else {
                    // Only unjoin if we're not being pushed into the removed collection.
                    // We still have an interest in that record otherwise.
                    record.unjoin(me);
                }
            }
        }
        
        if (!silent) {
            // If this removal is just the first part of a replacement operation,
            // do not fire the events now.
            //
            // onCollectionAddItems will fire a refresh event, and convert multiple
            // remove and add operations to an atomic refresh event.
            // This will provide a better UI update.
            // Also, focus can only be preserved around one operation, so
            // editing a field which is the sorted field could result in 
            // incorrect focus..
            if (!replacement || !replacement.items.length) {
                me.fireEvent('remove', me, records, index, isMove);
                
                // If there is a next property, that means there is another range that needs
                // to be removed after this. Wait until everything is gone before firing
                // datachanged since it should be a bulk operation
                if (lastChunk) {
                    me.fireEvent('dataChanged', me);
                }
            }
        }

        if (replacement) {
            me.setMoving(replacement.items, false);
        }
    }

    onFilterEndUpdate (sender) {
        let me = this;
        
        if (me.destroying) {
            return;
        }

        // Filtering changes the items reference of the collection, and that array
        // object if directly referenced by Ranges. The ranges have to refresh themselves
        // upon add.
        if (me.activeRanges) {
            me.syncActiveRanges();
        }

        super.onFilterEndUpdate(sender);

        me.callObservers('Filter');
    }

    onIdChanged (rec, oldId, newId) {
        this.data.updateKey(rec, oldId);
        
        // This event is used internally
        this.fireEvent('idChanged', this, rec, oldId, newId);
    }

    /**
     * Called internally when a Proxy has completed a load request
     */
    onProxyLoad (operation) {
        let me = this;
        let resultSet = operation.resultSet;
        let records = operation.records;
        let successful = operation.wasSuccessful();

        if (me.destroyed) {
            return;
        }

        if (resultSet) {
            me.totalSize = resultSet.total;
        }

        if (successful) {
            records = me.processAssociation(records);
            me.loadRecords(records, operation.addRecords ? { addRecords: true } : undefined);
            me.attachSummaryRecord(resultSet);
        }
        else {
            me._loading = false;
        }

        if (me.hasListeners.load) {
            me.fireEvent('load', me, records, successful, operation);
        }
        
        me.callObservers('AfterLoad', [records, successful, operation]);
    }

    onProxyWrite (operation) {
        if (operation.wasSuccessful()) {
            this.attachSummaryRecord(operation.resultSet);
        }
        
        super.onProxyWrite(operation);
    }

    onRemoteFilterSet (filters, remoteFilter) {
        if (filters) {
            let data = this.data;
            
            filters.$owner = remoteFilter ? this : data;

            data.filters = remoteFilter ? null : filters;
        }
        
        super.onRemoteFilterSet(filters, remoteFilter);
    }

    onRemoteSortSet (sorters, remoteSort) {
        let data = this.data;
        
        if (sorters) {
            sorters.$owner = remoteSort ? this : data;

            data.sorters = remoteSort ? null : sorters;
        }
        
        data.autoGroup = !remoteSort;
        
        super.onRemoteSortSet(sorters, remoteSort);
    }

    setLoadOptions (options) {
        // Only add grouping options if grouping is remote
        let me = this;
        let pageSize = me.pageSize;
        let session, grouper;

        if (me.remoteSort && !options.grouper) {
            grouper = me.grouper;
            
            if (grouper) {
                options.grouper = grouper;
            }
        }

        if (pageSize || 'start' in options || 'limit' in options || 'page' in options) {
            options.page = options.page != null ? options.page : me.currentPage;
            
            options.start = (options.start !== undefined)
                ? options.start
                : (options.page - 1) * pageSize;
            
            options.limit = options.limit != null ? options.limit : pageSize;

            me.currentPage = options.page;
        }

        options.addRecords = options.addRecords || false;

        if (!options.recordCreator) {
            session = me.session;
            
            if (session) {
                options.recordCreator = session.recordCreator;
            }
        }
        
        return super.setLoadOptions(options);
    }

    setMoving (records, isMoving) {
        let me = this;
        let map = me.moveMap || (me.moveMap = {});
        let id, rec;

        for (rec of records) {
            id = rec.id;
            
            if (isMoving) {
                if (map[id]) {
                    ++map[id];
                }
                else {
                    map[id] = 1;
                    ++me.moveMapCount;
                }
            }
            else {
                if (--map[id] === 0) {
                    delete map[id];
                    --me.moveMapCount;
                }
            }
        }

        if (me.moveMapCount === 0) {
            me.moveMap = null;
        }
    }

    processAssociation (records) {
        let me = this;
        let associatedEntity = me.associatedEntity;

        if (associatedEntity) {
            records = me.role.processLoad(me, associatedEntity, records, me.session);
        }
        
        return records;
    }

    // Provides docs from the mixin
    /**
     * @method each
     * @inheritdoc LocalStore#each
     */

    /**
     * @method collect
     * @inheritdoc LocalStore#collect
     */

    /**
     * @method getById
     * @inheritdoc LocalStore#getById
     */

    /**
     * @method getByInternalId
     * @inheritdoc LocalStore#getByInternalId
     */

    /**
     * @method indexOf
     * @inheritdoc LocalStore#indexOf
     */

    /**
     * @method indexOfId
     * @inheritdoc LocalStore#indexOfId
     */

    /**
     * @method queryBy
     * @inheritdoc LocalStore#queryBy
     */

    /**
     * @method query
     * @inheritdoc LocalStore#query
     */

    /**
     * @method first
     * @inheritdoc LocalStore#first
     */

    /**
     * @method last
     * @inheritdoc LocalStore#last
     */

    /**
     * @method sum
     * @inheritdoc LocalStore#sum
     */

    /**
     * @method count
     * @inheritdoc LocalStore#count
     */

    /**
     * @method min
     * @inheritdoc LocalStore#min
     */

    /**
     * @method max
     * @inheritdoc LocalStore#max
     */

    /**
     * @method average
     * @inheritdoc LocalStore#average
     */

    /**
     * @method aggregate
     * @inheritdoc LocalStore#aggregate
     */

    /**
     * @event groupchange
     * Fired whenever the grouping in the grid changes.
     * @param {Store} store The store.
     * @param {Grouper} grouper The grouper object.
     */

    /**
     * @event filterchange
     * Fired whenever the filter set changes.
     * @param {Store} store The store.
     * @param {Filter[]} filters The array of Filter objects.
     */
}

const undestroyable = {
    destroy () {}
};

@define
class EmptyStore extends Store {
    @config
    proxy = MemoryProxy;

    on () {
        return undestroyable;
    }
    
    un () {
        // empty
    }

    //<debug>
    add () {
        raise('Cannot modify the EmptyStore singleton');
    }

    remove () {
        raise('Cannot modify the EmptyStore singleton');
    }

    insert () {
        raise('Cannot modify the EmptyStore singleton');
    }

    destroy () {
        raise('Cannot modify the EmptyStore singleton');
    }

    loadData () {
        raise('Cannot modify the EmptyStore singleton');
    }
    //</debug>
}

Store.EMPTY = new EmptyStore();

Store.EMPTY.load.immediate = true;

export { Store };
