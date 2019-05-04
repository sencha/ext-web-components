import {
    config, copy, define
} from '../../../extjs-core/src';

import { Sorter } from './Sorter';

/**
 * Represents a grouping of items. The grouper works in a similar fashion as the
 * `Ext.util.Sorter` except that groups must be able to extract a value by which all items
 * in the group can be collected. By default this is derived from the `property` config
 * but can be customized using the `groupFn` if necessary.
 *
 * All items with the same group value compare as equal. If the group values do not compare
 * equally, the sort can be controlled further by setting `sortProperty` or `sorterFn`.
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
class Grouper extends Sorter {
    /**
     * @cfg {Function} groupFn
     * This function is called for each item in the collection to determine the group
     * to which it belongs. By default the `property` value is used to group items.
     * @cfg {Object} groupFn.item The current item from the collection.
     * @cfg {String} groupFn.return The group identifier for the item.
     */
    @config
    groupFn = null;

    /**
     * @cfg {String} property
     * The field by which records are grouped. Groups are sorted alphabetically by
     * group value as the default. To sort groups by a different property, use the
     * `sortProperty` configuration.
     */

    /**
     * @cfg {String} sortProperty
     * You can set this configuration if you want the groups to be sorted on something
     * other then the group string returned by the `groupFn`. This serves the same role
     * as `property` on a normal `Sorter`.
     */
    @config
    sortProperty = null;

    static decode (property, direction) {
        let ret = property;

        if (ret && !ret.isGrouper) {
            direction = direction || 'ASC';
            
            if (typeof property === 'string') {
                if (property[0] === '^') {
                    direction = 'DESC';
                    property = property.substr(1);
                }

                ret = {
                    property,
                    direction
                };
            }
            else if (!property.direction) {
                ret = copy({}, property);
                ret.direction = direction;
            }
            
            ret = new Grouper(ret);
        }

        return ret;
    }

    /**
     * Returns the value for grouping to be used.
     * @param {Object/Model} item The object or record
     * @return {String}
     */
    getGroupString (item) {
        let group = this.groupFn(item);

        return (group != null) ? String(group) : '';
    }

    sortFn (item1, item2) {
        let me = this;
        let lhs = me.groupFn(item1);
        let rhs = me.groupFn(item2);
        let property = me.sortProperty;
        let root = me.root;
        let sorterFn = me.sorterFn;
        let transform = me.transform;

        if (transform) {
            lhs = transform(lhs);
            rhs = transform(rhs);
        }

        // Items with the same groupFn result must be equal... otherwise we sort them
        // by sorterFn or sortProperty.
        if (lhs === rhs) {
            return 0;
        }

        if (property || sorterFn) {
            if (sorterFn) {
                return sorterFn.call(this, item1, item2);
            }

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
        }

        return (lhs > rhs) ? 1 : (lhs < rhs ? -1 : 0);
    }

    standardGroupFn (item) {
        let root = this.root;
        let data = (root && item) ? item[root] : item;

        return data && data[this.property];
    }

    updateSorterFn () {
        // don't call super() here - we don't want to smash sortFn w/sorterFn
    }

    updateProperty () {
        // we don't call super() since that is related to sorterFn smashing sortFn
        if (!this.groupFn) {
            this.groupFn = this.standardGroupFn;
        }
    }
}

export { Grouper };
