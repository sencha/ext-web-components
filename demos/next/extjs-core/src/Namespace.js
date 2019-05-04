import { Empty } from './Misc';

/**
 * @private
 */
export class Namespace {
    constructor (root = new Empty()) {
        this.root = root;

        this.aliases = new Empty();
        this.cache = new Empty();
        this.classes = new Empty();
        this.scratch = [];
    }
    
    alias (target, name, prefix) {
        let a, ret, s;
        
        if (typeof name === 'string') {
            this.aliases[ret = prefix ? prefix + name : name] = target;
        }
        else {
            for (s of name) {
                a = this.alias(target, s, prefix);
                ret = ret || a;
            }
        }
        
        return ret;
    }
    
    /**
     * Creates namespaces to be used for scoping variables and classes. Specifying the last
     * node of a namespace implicitly creates all other nodes.
     *
     * Usage:
     *
     *     Ext.namespace('Company', 'Company.data');
     *
     *     // equivalent and preferable to the above syntax
     *     Ext.ns('Company.data');
     *
     *     Company.Widget = function () { ... };
     *
     *     Company.data.CustomStore = function (config) { ... };
     *
     * @param {String...} namespaces
     * @return {Object} The (last) namespace object created.
     */
    create (...namespaces) {
        let root = this.root;
    
        for (let name of namespaces) {
            root = this.get(name, true);
        }
    
        return root;
    }

    /**
     * Return the value of the given "dot path" name. This supports remapping (for use
     * in sandbox builds) as well as auto-creating of namespaces.
     *
     * @param {String} namespace The name of the namespace or class.
     * @param {Boolean} [autoCreate] Pass `true` to create objects for undefined names.
     * @return {Object} The object that is the namespace or class name.
     */
    get (namespace, autoCreate) {
        let entry = this.lookup(namespace);
        let scope = entry.value;
        let scratch = this.scratch;
        let i = 0;
        let e, parent, prev;
    
        if (!scope) {
            // Put entries on the stack in reverse order: [ 'Panel', 'grid', 'Ext' ]
            for (e = entry; e; e = e.parent) {
                // since we process only what we add to the array, and that always
                // starts at index=0, we don't need to clean up the array (that would
                // just encourage the GC to do something pointless).
                scratch[i++] = e;
            }
    
            for (scope = this.root; i-- > 0; prev = e) {
                if (prev) {
                    // Make sure our parent entry has a value:
                    //
                    //      entry['Ext.grid'].value = Ext.grid
                    //
                    // We only want to process parent entries because a leaf could be
                    // a namespace member (e.g., a class).
                    //
                    prev.value = scope;
                }
    
                // We'll process entries in top-down order ('Ext', 'grid' then 'Panel').
                e = scratch[i];
                parent = scope;
    
                scope = e.value || scope[e.name];
    
                if (!scope) {
                    if (!autoCreate) {
                        break;
                    }
    
                    // Whenever we create a namespace we track it directly on the Entry
                    // to speed up future lookups.
                    parent[e.name] = e.value = scope = new Empty();
                }
            }
        }
    
        return scope;
    }

    /**
     * Return the namespace cache entry for the given a class name or namespace (e.g.,
     * "Ext.grid.Panel").
     *
     * @param {String} namespace The namespace or class name to lookup.
     * @return {Object} The cache entry.
     * @return {String} return.name The leaf name ("Panel" for "Ext.grid.Panel").
     * @return {Object} return.parent The entry of the parent namespace (i.e., "Ext.grid").
     * @return {Object} return.value The namespace object. This is only set for namespace
     * entries.
     */
    lookup (namespace) {
        if (typeof namespace !== 'string') {
            return namespace;  // set() can get us here w/an entry object
        }

        let cache = this.cache;
        let entry = cache[namespace];
        let i;
    
        if (!entry) {
            i = namespace.lastIndexOf('.');
    
            if (i < 0) {
                entry = {
                    name: namespace
                };
            }
            else {
                entry = {
                    name: namespace.substring(i + 1),
                    parent: this.lookup(namespace.substring(0, i))
                };
            }
    
            cache[namespace] = entry;
        }
    
        return entry;
    }

    /**
     * Creates a namespace and assign the `value` to the created object.
     *
     *     Ext.ns.set('MyCompany.pkg.Example', someObject);
     *
     *     alert(MyCompany.pkg.Example === someObject); // alerts true
     *
     * @param {String} namespace
     * @param {Object} value
     * @private
     */
    set (namespace, value) {
        let entry = this.lookup(namespace);
        let parent = entry.parent;
        let scope = parent ? parent.value : this.root;
    
        if (!scope) {
            // If we have a parent w/o value, it is either not yet created or it could be
            // a manually created namespace.
            scope = this.get(entry.parent, true);
        }
    
        scope[entry.name] = value;
    
        return value;
    }
}
