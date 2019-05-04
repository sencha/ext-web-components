import {
    //<debug>
    assert,
    //</debug>

    define, config
} from '../../../extjs-core/src';

import { AbstractStore } from './Abstract';
import { LocalStore } from './Local';

/**
 * A chained store is a store that is a "view" of an existing store. The data comes from the
 * {@link #source}, however this view of the store may be sorted & filtered independently without
 * having any impact on the {@link #source} store.
 */
@define({
    type: 'chained',

    mixins: [
        LocalStore
    ]
})
class ChainedStore extends AbstractStore {
    /**
     * @cfg {Collection} data
     * The `Collection` that stores a subset of {@link Model records} from the `source`.
     * @readonly
     */
    @config('destroy')
    data = 0; // need the applier to be called initially

    @config
    remoteFilter = false;

    @config
    remoteSort = false;

    /**
     * @cfg {Store/String} source
     * The backing data source for this chained store. Either a store instance
     * or the id of an existing store.
     */
    @config('nullify')
    source = null;

    //---------------------------------------------------------------------------------
    // Life-cycle

    // dtor () {
    //     var me = this;
    //
    //     me.observers = null;
    //     me.source = null;
    //     me.data.destroy(true);
    //     me.data = null;
    // }

    //---------------------------------------------------------------------------------
    // Special

    [Symbol.iterator] () {
        return this.data.items[Symbol.iterator]();
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    get loaded () {
        let source = this.source;
        
        return source ? source.loaded : false;
    }

    get loading () {
        let source = this.source;
        
        return source ? source.loading : false;
    }

    get model () {
        let source = this.source;
        
        return source && source.model;
    }
    
    get session () {
        let source = this.source;
        
        return source && source.session;
    }

    get synchronous () {
        return this.source.synchronous;
    }

    get totalSize () {
        return this.data.length;
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    applyData (data) {
        return data || this.constructDataCollection();
    }

    // applySource (source) {
    //     return Base.Factory.store(source);  TODO ?
    // }
    
    updateSource (source, oldSource) {
        let me = this;
        let data;
        
        if (oldSource && !oldSource.destroyed) {
            oldSource.removeObserver(me);
        }
        
        if (source) {
            data = me.data;
            data.source = source.data;
            
            if (!me.constructing) {
                me.fireEvent('refresh', me);
                me.fireEvent('dataChanged', me);
            }
            
            source.addObserver(me);
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)
    
    // getData () {
    //     var me = this,
    //         data = me.data;
    //    
    //     if (!data) {
    //         me.data = data = me.constructDataCollection();
    //     }
    //    
    //     return data;
    // }

    remove (...args) {
        return this.source.remove(...args);
    }

    removeAll () {
        return this.source.removeAll();
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    onCollectionAdd (collection, info) {
        let me = this;
        let records = info.items;
        let lastChunk = !info.next;

        if (me.ignoreCollectionAdd) {
            return;
        }

        // Collection add changes the items reference of the collection, and that array
        // object if directly referenced by Ranges. The ranges have to refresh themselves
        // upon add.
        if (me.activeRanges) {
            me.syncActiveRanges();
        }

        me.fireEvent('add', me, records, info.at);
        
        // If there is a next property, that means there is another range that needs
        // to be removed after this. Wait until everything is gone before firign dataChanged
        // since it should be a bulk operation
        if (lastChunk) {
            me.fireEvent('dataChanged', me);
        }
    }

    // Our collection tells us that an item has changed
    onCollectionItemChange (collection, info) {
        let me = this;
        let record = info.item;
        let modifiedFieldNames = info.modified || null;
        let type = info.meta;

        // Inform any interested parties that a record has been mutated.
        // This will be invoked on TreeStores in which the invoking record
        // is an descendant of a collapsed node, and so *will not be contained by this store
        me.onUpdate(record, type, modifiedFieldNames, info);
        me.fireEvent('update', me, record, type, modifiedFieldNames, info);
        me.fireEvent('dataChanged', me);
    }
    
    onCollectionUpdateKey (source, details) {
        // Must react to upstream Collection key update by firing idchanged event
        this.fireEvent('idChanged', this, details.item, details.oldKey, details.newKey);
    }

    onUpdate () {
        // empty
    }

    onCollectionRemove (collection, info) {
        let me = this;
        let records = info.items;
        let lastChunk = !info.next;
        
        if (me.ignoreCollectionRemove) {
            return;
        }
        
        me.fireEvent('remove', me, records, info.at, false);
        
        // If there is a next property, that means there is another range that needs
        // to be removed after this. Wait until everything is gone before firing dataChanged
        // since it should be a bulk operation
        if (lastChunk) {
            me.fireEvent('dataChanged', me);
        }
    }

    onSourceBeforeLoad (source, operation) {
        this.fireEvent('beforeLoad', this, operation);
        this.callObservers('BeforeLoad', [operation]);
    }

    onSourceAfterLoad (source, records, successful, operation) {
        this.fireEvent('load', this, records, successful, operation);
        this.callObservers('AfterLoad', [records, successful, operation]);
    }

    onFilterEndUpdate (sender) {
        super.onFilterEndUpdate(sender);

        this.callObservers('Filter');
    }
    
    onSourceBeforePopulate () {
        this.ignoreCollectionAdd = true;
        this.callObservers('BeforePopulate');
    }
    
    onSourceAfterPopulate () {
        var me = this;
        
        me.ignoreCollectionAdd = false;
        me.fireEvent('dataChanged', me);
        me.fireEvent('refresh', me);
        
        this.callObservers('AfterPopulate');
    }
    
    onSourceBeforeClear () {
        this.ignoreCollectionRemove = true;
        this.callObservers('BeforeClear');
    }
    
    onSourceAfterClear () {
        this.ignoreCollectionRemove = false;
        this.callObservers('AfterClear');
    }
    
    onSourceBeforeRemoveAll () {
        this.ignoreCollectionRemove = true;
        this.callObservers('BeforeRemoveAll');
    }
    
    onSourceAfterRemoveAll (source, silent) {
        var me = this;
        
        me.ignoreCollectionRemove = false;
        
        if (!silent) {
            me.fireEvent('clear', me);
            me.fireEvent('dataChanged', me);
        }
        
        this.callObservers('AfterRemoveAll', [silent]);
    }

    onSourceFilter () {
        var me = this;
        
        me.fireEvent('refresh', me);
        me.fireEvent('dataChanged', me);
    }

    getSourceValue (method, defaultValue) {
        var source = this.getSource(),
            val = defaultValue;

        if (source && !source.destroyed) {
            val = source[method]();
        }
        
        return val;
    }

    isMoving (...args) {
        let source = this.source;
        
        return source.isMoving ? source.isMoving(...args) : false;
    }
    
    //<debug>
    updateRemoteFilter (remoteFilter, oldRemoteFilter) {
        assert(!remoteFilter, 'Remote filtering cannot be used with chained stores.');
        
        super.updateRemoteFilter(remoteFilter, oldRemoteFilter);
    }

    updateRemoteSort (remoteSort, oldRemoteSort) {
        assert(!remoteSort, 'Remote sorting cannot be used with chained stores.');
        
        super.updateRemoteSort(remoteSort, oldRemoteSort);
    }
    //</debug>

    // Provides docs from the mixin
    
    /**
     * @method add
     * @inheritdoc Ext.data.LocalStore#add
     */

    /**
     * @method each
     * @inheritdoc Ext.data.LocalStore#each
     */

    /**
     * @method collect
     * @inheritdoc Ext.data.LocalStore#collect
     */

    /**
     * @method getById
     * @inheritdoc Ext.data.LocalStore#getById
     */

    /**
     * @method getByInternalId
     * @inheritdoc Ext.data.LocalStore#getByInternalId
     */

    /**
     * @method indexOf
     * @inheritdoc Ext.data.LocalStore#indexOf
     */

    /**
     * @method indexOfId
     * @inheritdoc Ext.data.LocalStore#indexOfId
     */
    
    /**
     * @method insert
     * @inheritdoc Ext.data.LocalStore#insert
     */

    /**
     * @method queryBy
     * @inheritdoc Ext.data.LocalStore#queryBy
     */

    /**
     * @method query
     * @inheritdoc Ext.data.LocalStore#query
     */

    /**
     * @method first
     * @inheritdoc Ext.data.LocalStore#first
     */

    /**
     * @method last
     * @inheritdoc Ext.data.LocalStore#last
     */

    /**
     * @method sum
     * @inheritdoc Ext.data.LocalStore#sum
     */

    /**
     * @method count
     * @inheritdoc Ext.data.LocalStore#count
     */

    /**
     * @method min
     * @inheritdoc Ext.data.LocalStore#min
     */

    /**
     * @method max
     * @inheritdoc Ext.data.LocalStore#max
     */

    /**
     * @method average
     * @inheritdoc Ext.data.LocalStore#average
     */

    /**
     * @method aggregate
     * @inheritdoc Ext.data.LocalStore#aggregate
     */
}

export { ChainedStore };
