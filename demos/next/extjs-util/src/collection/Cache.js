import { LRU } from './LRU';

/**
 * This class is used to manage simple, LRU caches. It provides an absolutely minimal
 * container interface. It is created like this:
 *
 *      this.itemCache = new Ext.util.Cache({
 *          miss: function (key) {
 *              return new CacheItem(key);
 *          }
 *      });
 *
 * The `{@link #miss}` abstract method must be implemented by either a derived class or
 * at the instance level as shown above.
 *
 * Once the cache exists and it can handle cache misses, the cache is used like so:
 *
 *      var item = this.itemCache.get(key);
 *
 * The `key` is some value that uniquely identifies the cached item.
 *
 * In some cases, creating the cache item may require more than just the lookup key. In
 * that case, any extra arguments passed to `get` will be passed to `miss`.
 *
 *      this.otherCache = new Ext.util.Cache({
 *          miss: function (key, extra) {
 *              return new CacheItem(key, extra);
 *          }
 *      });
 *
 *      var item = this.otherCache.get(key, extra);
 *
 * To process items as they are removed, you can provide an `{@link #evict}` method. The
 * stock method is `Ext.emptyFn` and so does nothing.
 *
 * For example:
 *
 *      this.itemCache = new Ext.util.Cache({
 *          miss: function (key) {
 *              return new CacheItem(key);
 *          },
 *
 *          evict: function (key, cacheItem) {
 *              cacheItem.destroy();
 *          }
 *      });
 *
 * @private
 */
class Cache extends LRU {
    /**
     * @cfg {Number} maxSize
     * The maximum size the cache is allowed to grow to before further additions cause
     * removal of the least recently used entry.
     */
    maxSize = 100;

    // noinspection JSCheckFunctionSignatures
    clear () {
        super.clear(this.evict);
    }

    /**
     * Finds an item in this cache and returns its value. If the item is present, it is
     * shuffled into the MRU (most-recently-used) position as necessary. If the item is
     * missing, the `{@link #miss}` method is called to create the item.
     *
     * @param {String} key The cache key of the item.
     * @param {Object...} args Arguments for the `miss` method should it be needed.
     * @return {Object} The cached object.
     */
    get (key, ...args) {
        let me = this;
        let entry = me.map.get(key);
        let value;

        if (entry) {
            value = entry.value;

            me.touch(key);
        }
        else {
            value = me.miss(key, ...args);

            me.add(key, value);
            me.trim(me.maxSize, me.evict);
        }

        return value;
    }

    //-------------------------------------------------------------------------
    // Internals

    /**
     * @method evict
     * This method is called internally from `{@link #get}` when the cache is full and
     * the least-recently-used (LRU) item has been removed.
     *
     * @param {String} key The cache lookup key for the item being removed.
     * @param {Object} value The cache value (returned by `{@link #miss}`) for the item
     * being removed.
     * @template
     * @protected
     */
    
    /**
     * @method miss
     * This method is called by `{@link #get}` when the key is not found in the cache.
     * The implementation of this method should create the (expensive) value and return
     * it. Whatever arguments were passed to `{@link #get}` will be passed on to this
     * method.
     *
     * @param {String} key The cache lookup key for the item.
     * @param {Object...} args Any other arguments originally passed to `{@link #get}`.
     * @abstract
     * @protected
     */
}

export { Cache };
