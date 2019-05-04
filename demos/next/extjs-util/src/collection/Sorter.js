import {
    assertIn, config, define
} from '../../../extjs-core/src';

import { Identifiable } from '../mixins';

//<debug>
const DIRECTIONS = {
    'ASC': 1,
    'DESC': 1
};
//</debug>

/**
 * Represents a single sorter that can be used as part of the sorters configuration in
 * Ext.mixin.Sortable.
 *
 * A common place for Sorters to be used are {@link Store Stores}. For example:
 *
 *      @example
 *      var store = Ext.create('Store', {
 *           fields: ['firstName', 'level'],
 *           sorters: 'level',
 *        
 *           data: [
 *               { firstName: 'Mitch',  level: 9000},
 *               { firstName: 'Seth',   level: 42},
 *               { firstName: 'Fred',   level: 510},
 *               { firstName: 'Israel', level: 690},
 *               { firstName: 'Greg',   level: 101},
 *               { firstName: 'Pat',    level: 0},              
 *               { firstName: 'Kevin',  level: 17},
 *               { firstName: 'Brandon',level: 690},
 *               { firstName: 'Gary',   level: 409},
 *               { firstName: 'Scott',  level: 789}
 *           ]
 *        });
 *        
 *        Ext.create('Ext.grid.Panel', {
 *            title: 'Support',
 *            store: store,
 *            columns: [
 *                { text: 'Name',  dataIndex: 'firstName' },
 *                { text: 'Level', dataIndex: 'level' }
 *            ],
 *            height: 300,
 *            width: 200,
 *            renderTo: Ext.getBody()
 *        });  
 *
 * In the next example, we specify a custom sorter function:
 *
 *        @example
 *        var store = Ext.create('Store', {
 *           fields: ['firstName', 'spiritAnimal'],
 *            sorters: [
 *                {
 *                    // Sort by first letter of second word of spirit animal, in
 *                    // descending order
 *                    sorterFn: function (record1, record2) {
 *                        var name1 = record1.data.spiritAnimal.split(' ')[1].substr(0,1),
 *                            name2 = record2.data.spiritAnimal.split(' ')[1].substr(0,1);
 * 
 *                        return name1 > name2 ? 1 : (name1 === name2) ? 0 : -1;
 *                    },
 *                    direction: 'DESC'
 *                }
 *            ],
 *         
 *           data: [
 *               { firstName: 'Mitch',  spiritAnimal: 'Panda Bear'},
 *               { firstName: 'Seth',   spiritAnimal: 'Rascally Rabbit'},
 *               { firstName: 'Fred',   spiritAnimal: 'Honey Badger'},
 *               { firstName: 'Israel', spiritAnimal: 'Mysterious Capybara'},
 *               { firstName: 'Greg',   spiritAnimal: 'Majestic Platypus'},
 *               { firstName: 'Kevin',  spiritAnimal: 'Sparkling Unicorn'},
 *               { firstName: 'Brandon',spiritAnimal: 'Pygmy Goat'},
 *               { firstName: 'Gary',   spiritAnimal: 'Suri Alpaca'},
 *               { firstName: 'Scott',  spiritAnimal: 'Ripe Armadillo'},
 *               { firstName: 'Pat',    spiritAnimal: 'Wiley Coyote'}
 *           ]
 *        });
 *        
 *        Ext.create('Ext.grid.Panel', {
 *            title: 'Support',
 *            store: store,
 *            columns: [
 *                { text: 'Name',          dataIndex: 'firstName' },
 *                { text: 'Spirit Animal', dataIndex: 'spiritAnimal', flex: 1 }
 *            ],
 *            height: 310,
 *            renderTo: Ext.getBody()
 *        });
 */
@define({
    prototype: {
        /**
         * This value is set based on the `direction` config to be either 1 or -1. This is used
         * as a multiplier for the raw comparison value to factor in the direction.
         * @private
         * @readonly
         */
        multiplier: 1
    }
})
class Sorter extends Identifiable {
    /**
     * @cfg {String} property
     * The property to sort by. Required unless `sorterFn` is provided
     */
    @config
    property = null;

    /**
     * @cfg {Function} sorterFn
     * A specific sorter function to execute. Can be passed instead of {@link #property}.
     * This function should compare the two passed arguments, returning -1, 0 or 1
     * depending on if item 1 should be sorted before, at the same level, or after
     * item 2.
     *
     *     sorterFn: function (person1, person2) {
     *         return (person1.age > person2.age) ? 1 : (person1.age === person2.age ? 0 : -1);
     *     }
     */
    @config
    sorterFn = null;

    /**
     * @cfg {String} root Optional root property. This is mostly useful when sorting a Store,
     * in which case we set the root to 'data' to make the filter pull the {@link #property}
     * out of the data object of each item
     */
    @config
    root = null;

    /**
     * @cfg {Function} transform A function that will be run on each value before
     * it is compared in the sorter. The function will receive a single argument,
     * the value.
     */
    @config
    transform = null;

    /**
     * @cfg {'ASC'/'DESC'} direction
     * The direction by which to sort.
     */
    @config
    direction = 'ASC';

    /**
     * Creates a comparator function given one or more `Sorter` instances.
     *
     * The returned function retains a reference to the collection or array of sorters
     * passed. This means the function will produce a comparison based on the current
     * content of the collection or array, and not based on the content at the time of
     * this call.
     *
     * @param {Sorter[]/Collection} sorters The sorter instances.
     * @param [nextFn] The next comparator function to call if all the `sorters` end
     * with equality.
     * @return {Function} The comparator function.
     */
    static createComparator (sorters, nextFn) {
        nextFn = nextFn || 0;

        return (lhs, rhs) => {
            let items = sorters.isCollection ? sorters.items : sorters;
            let comp;

            for (comp of items) {
                comp = comp.sort(lhs, rhs);

                if (comp) {
                    return comp;
                }
            }

            return nextFn ? nextFn(lhs, rhs) : 0;
        };
    }
    
    get ascending () {
        return this.direction === 'ASC';
    }
    
    set ascending (v) {
        this.direction = v ? 'ASC' : 'DESC';
    }
    
    get descending () {
        return !this.ascending;
    }
    
    set descending (v) {
        this.ascending = !v;
    }

    sort (lhs, rhs) {
        return this.multiplier * this.sortFn(lhs, rhs);
    }

    /**
     * Basic default sorter function that just compares the defined property of each object.
     * This is hidden by the `sorterFn` provided by the user.
     * @private
     */
    sortFn (item1, item2) {
        let me = this;
        let transform = me.transform;
        let root = me.root;
        let property = me.property;
        let lhs, rhs;

        if (root) {
            item1 = item1[root];
            item2 = item2[root];
        }

        lhs = item1[property];
        rhs = item2[property];

        if (transform) {
            lhs = transform(lhs);
            rhs = transform(rhs);
        }

        return (lhs > rhs) ? 1 : (lhs < rhs ? -1 : 0);
    }
    
    applyDirection (direction) {
        direction = direction ? direction.toUpperCase() : 'ASC';
        
        //<debug>
        assertIn(direction, DIRECTIONS);
        //</debug>
        
        return direction;
    }

    updateDirection () {
        this.multiplier = this.ascending ? 1 : -1;
    }

    updateProperty (property) {
        if (property) {
            let me = this;
            
            // Unhide the default sortFn on our prototype
            delete me.sortFn;
            
            if (me.autoGenId) {
                me.autoGenId = false;
                me.id = property;
            }
        }
    }

    updateSorterFn (sorterFn) {
        // Hide the default sortFn on our prototype
        this.sortFn = sorterFn;
    }

    /**
     * Toggles the direction of this Sorter. Note that when you call this function,
     * the Collection this Sorter is part of does not get refreshed automatically.
     */
    toggle () {
        this.direction = this.ascending ? 'DESC' : 'ASC';
    }

    /**
     * Returns this sorter's state.
     * @return {Object}
     */
    getState () {
        let me = this;
        let result = {
            root: me.root,
            property: me.property,
            direction: me.direction
        };

        if (!me.autoGenId) {
            result.id = me.id;
        }
        
        return result;
    }

    /**
     * Returns this sorter's serialized state. This is used when transmitting this sorter
     * to a server.
     * @return {Object}
     */
    serialize () {
        return {
            property: this.property,
            direction: this.direction
        };
    }
}

export { Sorter };
