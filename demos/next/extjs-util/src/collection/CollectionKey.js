import {
    ExMap,
    assert, config, define, is
} from '../../../extjs-core/src';

import { Identifiable } from '../mixins';

const EXCLUDE_COLLECTION = {
    collection: true
};

/**
 * Maintains an additional key map for an `Ext.util.Collection`. Instances of this class
 * are seldom created manually. Rather they are created by the `Ext.util.Collection' when
 * given an `extraKeys` config.
 */
@define({
    prototype: {
        observerPriority: -200,

        /**
         * This property is used to know when this `Index` is in sync with the `Collection`.
         * When the two are synchronized, their `generation` values match.
         * @private
         * @readonly
         */
        generation: 0,
    
        /**
         * @property {Map} map
         * A map to get an object based on its key.
         * @private
         */
        map: null,
    
        /**
         * @property {Number} mapRebuilds
         * The number of times the `map` has been rebuilt. This is for diagnostic use.
         * @private
         * @readonly
         */
        mapRebuilds: 0
    }
})
class CollectionKey extends Identifiable {
    @config
    collection = null;

    /**
     * @cfg {Function/String} [keyFn]
     * A function to retrieve the key of an item in the collection. This can be normal
     * function that takes an item and returns the key or it can be the name of the
     * method to call on an item to get the key.
     *
     * For example:
     *
     *      new Ext.util.Collection({
     *          keys: {
     *              byName: {
     *                  keyFn: 'getName' // each item has a "getName" method
     *              }
     *          }
     *      });
     *
     * Or equivalently:
     *
     *      new Ext.util.Collection({
     *          keys: {
     *              byName: {
     *                  keyFn: function (item) {
     *                      return item.getName();
     *                  }
     *              }
     *          }
     *      });
     */
    @config
    keyFn = null;

    /**
     * @cfg {String} property
     * The name of the property on each item that is its key.
     *
     *      new Ext.util.Collection({
     *          keys: {
     *              byName: 'name'
     *          }
     *      });
     *
     * Or equivalently:
     *
     *      new Ext.util.Collection({
     *          keys: {
     *              byName: {
     *                  property: 'name'
     *              }
     *          }
     *      });
     *
     *      var item = collection.byName.get('fooname');
     */
    @config
    property = null;

    /**
     * @cfg {String} rootProperty
     * The name of the sub-object property on each item that is its key. This value
     * overrides `{@link Ext.util.Collection#rootProperty}`.
     *
     *      new Ext.util.Collection({
     *          keys: {
     *              byName: {
     *                  property: 'name',
     *                  rootProperty: 'data'
     *              }
     *          }
     *      });
     *
     *      var item = collection.byName.get('fooname');
     */
    @config
    rootProperty = null;

    @config
    unique = true;

    /**
     * @property {String} name
     * This property is set by `Collection` when added via `extraKeys`.
     * @readonly
     */

    //<debug>
    setup () {
        assert(typeof this.getKey === 'function',
               'CollectionKey requires a keyFn or property config');
    }
    //</debug>

    dtor () {
        this.clear();
        this.collection.removeObserver(this);
    }

    clone () {
        let config = this.getCurrentConfig(EXCLUDE_COLLECTION);

        return new CollectionKey(config);
    }

    /**
     * Returns the item or, if not `unique` possibly array of items that have the given
     * key.
     * @param {*} key The key that will match the `keyFn` return value or value of
     * the specified `property`.
     * @return {Object}
     */
    get (key) {
        let map = this.map || this.getMap();

        return map.get(key, null);
    }

    /**
     * Clears this index.
     *
     * Called when the collection is cleared.
     * @private
     */
    clear () {
        this.map = null;
    }

    /**
     * Returns the index of the item with the given key in the collection. If this is not
     * a `unique` result, the index of the first item in the collection with the matching
     * key.
     *
     * To iterate the indices of all items with a matching (not `unique`) key:
     *
     *      for (index = collection.byName.indexOf('foo');
     *              index >= 0;
     *              index = collection.byName.indexOf('foo', index)) {
     *          // process item at "index"
     *      }
     *
     * @param {Mixed} key The key that will match the `keyFn` return value or value of
     * the specified `property`.
     * @param {Number} [startAt=-1] The index at which to start. Only occurrences beyond
     * this index are returned.
     * @return {Number} The index of the first item with the given `key` beyond the given
     * `startAt` index or -1 if there are no such items.
     */
    indexOf (key, startAt) {
        let collection = this.collection;
        let length = collection.length;
        let map = this.map || this.getMap();
        let item = map.get(key);
        let i, index, items, n;

        if (!item) {
            return -1;
        }

        if (startAt === undefined) {
            startAt = -1;
        }

        if (is.array(item)) {
            items = item;
            index = length; // greater than any actual indexOf

            for (n = items.length; n-- > 0;) {
                i = collection.indexOf(items[n]);

                if (i < index && i > startAt) {
                    index = i;
                }
            }

            if (index === length) {
                return -1;
            }
        }
        else {
            index = collection.indexOf(item);
        }

        return (index > startAt) ? index : -1;
    }

    /**
     * Change the key for an existing item in the collection. If the old key does not
     * exist this call does nothing.
     * @param {Object} item The item whose key has changed.
     * @param {String} oldKey The old key for the `item`.
     */
    updateKey (item, oldKey) {
        let me = this;
        let map = me.map;
        let bucket, index;

        if (map) {
            bucket = map.get(oldKey);

            if (is.array(bucket)) {
                index = bucket.indexOf(item);

                if (index >= 0) {
                    if (bucket.length > 2) {
                        bucket.splice(index, 1);
                    }
                    else {
                        // If there is an array of 2 items, replace the array with the
                        // one remaining item. Since index then is either 0 or 1, the
                        // index of the other item is easy.
                        map.set(oldKey, bucket[1 - index]);  // "1 - 0" = 1, "1 - 1" = 0
                    }
                }
            }
            else if (bucket) {
                //<debug>
                assert(bucket === item || !me.unique,
                       'Incorrect oldKey "{0}" for item with unique newKey "{1}"', oldKey,
                       me.getKey(item));
                //</debug>

                map.delete(oldKey);
            }

            me.add([ item ]);
        }
    }

    //-------------------------------------------------------------------------
    // Calls from our Collection:

    onCollectionAdd (collection, add) {
        if (this.map) {
            this.add(add.items);
        }
    }

    onCollectionItemChange () {
        this.map = null;
    }

    onCollectionRefresh () {
        this.map = null;
    }

    onCollectionRemove (collection, remove) {
        let me = this;
        let map = me.map;
        let items = remove.items;
        let length = items.length;
        let i, key;

        if (map) {
            if (me.unique && length < collection.length / 2) {
                for (i = 0; i < length; ++i) {
                    key = me.getKey(items[i]);
                    map.delete(key);
                }
            }
            else {
                me.map = null;
            }
        }
    }

    //-------------------------------------------------------------------------
    // Private

    add (items) {
        let me = this;
        let map = me.map;
        let unique = me.unique;
        let bucket, item, key;

        for (item of items) {
            key = me.getKey(item);

            if (unique || !map.has(key)) {
                map.set(key, item);
            }
            else {
                if (!is.array(bucket = map.get(key))) {
                    map.set(key, bucket = [ bucket ]);
                }

                bucket.push(item);
            }
        }
    }
    
    getKeyProp (item, property) {
        let me = this;
        let root = me.rootProperty;
        let data;

        if (root === null) {
            root = me.collection.rootProperty;
        }

        data = root ? item[root] : item;
        
        return data[property];
    }

    getMap () {
        let me = this;
        let map = me.map;

        if (!map) {
            me.map = map = new ExMap();
            me.keysByItemKey = new ExMap();
            ++me.mapRebuilds;

            me.add(me.collection.items);
        }

        return map;
    }

    applyKeyFn (keyFn) {
        let ret = keyFn;
        
        if (typeof keyFn === 'string') {
            // wrapped so you can set a breakpoint inside or outside:
            ret = item =>
                item[keyFn]();
        }
        
        this.getKey = ret;

        return ret;
    }
    
    applyProperty (property) {
        this.getKey = item =>
            this.getKeyProp(item, property);
        
        return property;
    }

    updateCollection (collection, oldCollection) {
        if (collection) {
            collection.addObserver(this);
        }

        if (oldCollection) {
            oldCollection.removeObserver(this);
        }
    }
}

export { CollectionKey };
