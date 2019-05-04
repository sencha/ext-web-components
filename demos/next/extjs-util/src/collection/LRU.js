import { copy } from '../../../extjs-core/src';

/**
 * This class manages a double-linked list. It provides an absolutely minimal container
 * interface.
 *
 * @private
 */
class LRU {
    constructor (config) {
        let me = this;
        let head;

        if (config) {
            copy(this, config);
        }

        // Give all entries the same object shape.
        me.head = head = {
            //<debug>
            id: (me.seed = 0),
            //</debug>
            key: null,
            value: null
        };

        /**
         * @property {Map} map
         * The items in the list indexed by their `key`.
         * @readonly
         */
        me.map = new Map();

        head.next = head.prev = head;
    }
    
    destroy () {
        this.clear();
    }
    
    * [Symbol.iterator] () {
        for (let head = this.head, ent = head.next; ent !== head; ent = ent.next) {
            yield ent;
        }
    }

    /**
     * Adds an item to the list with the specified `key`. Items are added at the
     * front (MRU) of the list.
     * @param {String} key
     * @param {Object} value
     */
    add (key, value) {
        let me = this;
        let map = me.map;
        let entry = map.get(key);

        if (entry) {
            me.unlink(entry);
        }

        map.set(key, entry = {
            //<debug>
            id: ++me.seed,
            //</debug>
            key,
            value
        });

        me.link(entry);

        return entry;
    }

    /**
     * Removes all items from this list optionally calling a function for each
     * remove item.
     * @param {Function} [fn] A function to call for each removed item.
     * @param {Object} fn.key The key of the removed item.
     * @param {Object} fn.value The removed item.
     */
    clear (fn) {
        let me = this;
        let head = me.head;
        let entry;

        head.next = head.prev = head;

        me.map.clear();

        if (fn) {
            for (entry = head.next; entry !== head; entry = entry.next) {
                fn.call(me, entry.key, entry.value);
            }
        }
    }

    /**
     * Removes the item at the end (LRU) of the list. Optionally the item can be passed
     * to a callback function. If the list is empty, no callback is made and this
     * method will return `undefined`.
     * @param {Function} fn The function to call for the removed item.
     * @param {Object} fn.key The key of the removed item.
     * @param {Object} fn.value The removed item.
     * @return {Object} The removed item.
     */
    prune (fn) {
        let me = this;
        let entry = me.head.prev;
        let map = me.map;
        let ret;

        if (map.size) {
            ret = entry.value;
            map.delete(entry.key);
            me.unlink(entry);

            if (fn) {
                fn.call(me, entry.key, ret);
            }
        }

        return ret;
    }

    /**
     * Removes an item from the list given its key.
     * @param {String} key The key of the item to remove.
     * @return {Object} The removed item or `undefined` if the key was not found.
     */
    remove (key) {
        let me = this;
        let map = me.map;
        let entry = map.get(key);
        let value;

        if (entry) {
            me.unlink(entry);
            value = entry.value;
            map.delete(key);
        }

        return value;
    }

    /**
     * Moves the item with the given key to the front (MRU) of the list.
     * @param {String} key The key of the item to move to the front.
     */
    touch (key) {
        let me = this;
        let head = me.head;
        let entry = me.map.get(key);

        if (entry && entry.prev !== head) {
            // The entry is not at the front, so remove it and insert it at the front
            // (to make it the MRU - Most Recently Used).
            me.unlink(entry);
            me.link(entry);
        }
    }

    /**
     * Reduces the length of the list to be no more than the specified `size`, removing
     * items from the end of the list as necessary. Optionally each removed item can
     * be passed to a callback `fn`.
     * @param {Number} size The number of items in the list
     * @param {Function} [fn] A function to call for each removed item.
     * @param {Object} fn.key The key of the removed item.
     * @param {Object} fn.value The removed item.
     */
    trim (size, fn) {
        let map = this.map;

        while (map.size > size) {
            this.prune(fn);
        }
    }

    //-------------------------------------------------------------------------
    // Internals

    /**
     * Inserts the given entry at the front (MRU) end of the entry list.
     * @param {Object} entry The cache item entry.
     * @private
     */
    link (entry) {
        let head = this.head;
        let first = head.next;

        entry.next = first;
        entry.prev = head;
        head.next = entry;
        first.prev = entry;
    }

    /**
     * Removes the given entry from the entry list.
     * @param {Object} entry The cache item entry.
     * @private
     */
    unlink (entry) {
        let next = entry.next;
        let prev = entry.prev;

        prev.next = next;
        next.prev = prev;
    }
}

export { LRU };
