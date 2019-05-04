//<debug>
import { assert } from '../../../extjs-core/src';
//</debug>

/**
 * This class manages one side of a `Matrix`.
 * @private
 */
class Side {
    /**
     * @property {Side} inverse
     * Reference to the opposite side of the matrix.
     * @readonly
     */

    constructor (matrix, index, role) {
        let me = this;

        /**
         * @property {Matrix} matrix
         * @readonly
         */
        me.matrix = matrix;

        /**
         * @property {Number} index
         * Either 0 or 1 which is the index of our id value in an association entry.
         * @readonly
         */
        me.index = index;

        /**
         * @property {Role} role
         * The role for this side of the matrix.
         * @readonly
         */
        me.role = role;

        /**
         * @property {Object} slices
         * Keyed by the id for this side of the matrix to yield a `Slice`.
         * @readonly
         */
        me.slices = {};
    }

    destroy () {
        let me = this;
        let slices = me.slices;
        let id;

        for (id in slices) {
            slices[id].destroy();
        }

        me.inverse = me.matrix = me.role = me.slices = null;
    }

    commit () {
        let slices = this.slices;
        let id;

        for (id in slices) {
            slices[id].commit();
        }
    }

    get (id1, id2) {
        let me = this;
        let slices = me.slices;
        let slice = slices[id1] || (slices[id1] = new Slice(me, id1));

        return (id2 || id2 === 0) ? slice.members[id2] : slice;
    }

    update (id1, id2, state) {
        let slice = this.get(id1);
        
        return slice.update(id2, state);
    }

    updateId (oldId, newId) {
        let slice = this.get(oldId);
        
        if (slice) {
            slice.updateId(newId);
        }
    }
}

/**
 * This class manages one side of a `Matrix`.
 * @private
 */
class Slice {
    constructor (side, id) {
        /**
         * @property {String/Number} id
         * The id of the interested entity. Based on whether this slice is on the "left"
         * or "right" of the matrix, this id identities the respective entity.
         * @readonly
         */
        this.id = id;

        /**
         * @property {Side} side
         * The side of the matrix to which this slice belongs.
         */
        this.side = side;

        /**
         * 
         */
        this.members = {};
    }

    destroy () {
        let me = this;
        let store = me.store;

        if (store) {
            store.matrix = null;
            store.un('load', me.onStoreLoad, me);
        }

        me.notify = me.scope = me.store = me.side = me.members = null;
    }

    attach (store) {
        let me = this;
        
        //<debug>
        assert(!me.store, 'Store is already attached');
        //</debug>

        me.store = store;
        store.matrix = me;

        store.once('load', me.onStoreLoad, me);
    }

    commit () {
        let members = this.members;
        let id;

        for (id in members) {
            members[id][2] = 0;
        }
    }

    onStoreLoad (store) {
        this.update(store.data.items, 0);
    }

    update (recordsOrIds, state) {
        //<debug>
        assert(recordsOrIds instanceof Array,
               'Only array of records or record ids are supported');
        //</debug>

        /* eslint-disable-next-line vars-on-top */
        let me = this;
        let side = me.side;
        let assocIndex = side.index;
        let length = recordsOrIds.length;
        let id = me.id;
        let members = me.members;
        let otherSide = side.inverse;
        let otherSlices = otherSide.slices;
        let assoc, call, i, item, otherId, otherSlice, record;

        for (i = 0; i < length; ++i) {
            call = record = null;
            item = recordsOrIds[i];
            otherId = item.isModel ? (record = item).id : item;
            assoc = members[otherId];

            // If we're in a created state and we're asking to remove it, don't move it to
            // removed state, just blow it away completely.
            if (state < 0 && assoc && assoc[2] === 1) {
                delete members[otherId];
                otherSlice = otherSlices[otherId];
                
                if (otherSlice) {
                    delete otherSlice.members[id];
                }
                
                call = 1;
            }
            else {
                if (!assoc) {
                    // Note - when we create a new matrix tuple we must catalog it on both
                    // sides of the matrix or risk losing it on only one side. To gather all
                    // of the tuples we need only visit one side.
                    assoc = [ otherId, otherId, state ];
                    assoc[assocIndex] = id;

                    members[otherId] = assoc;
                    otherSlice = otherSlices[otherId];
                    
                    if (!otherSlice) {
                        otherSlices[otherId] = otherSlice = new Slice(otherSide, otherId);
                    }
                    
                    otherSlice.members[id] = assoc;
                    call = 1;
                }
                else if (state !== assoc[2] && state !== 0 && !(state === 1 && assoc[2] === 0)) {
                    // If they aren't equal and we're setting it to 0, favour the current state,
                    // except in the case where it's trying to mark as added when we already have
                    // it as present
                    assoc[2] = state;
                    otherSlice = otherSlices[otherId];
                    // because the assoc exists the other side will have a slice
                    call = 1;
                }
            }

            if (call) {
                if (me.notify) {
                    me.notify.call(me.scope, me, otherId, state);
                }
                
                if (otherSlice && otherSlice.notify) {
                    otherSlice.notify.call(otherSlice.scope, otherSlice, id, state);
                }
            }
        }
    }

    updateId (newId) {
        let me = this;
        let oldId = me.id;
        let side = me.side;
        let slices = side.slices;
        let slice = slices[oldId];
        let members = slice.members;
        let index = side.index;
        let otherSlices = side.inverse.slices;
        let assoc, otherId, otherMembers;

        me.id = newId;
        slices[newId] = slice;
        delete slices[oldId];

        for (otherId in members) {
            assoc = members[otherId];
            assoc[index] = newId;

            otherMembers = otherSlices[otherId].members;
            otherMembers[newId] = otherMembers[oldId];
            delete otherMembers[oldId];
        }
    }
}

/**
 * This class manages a many-to-many matrix for a `Session`.
 * @private
 */
class Matrix {
    /**
     * @property {ManyToMany} association
     * The `ManyToMany` association for this matrix.
     * @readonly
     */

    /**
     * @property {Session} session
     * The `Session` owning this matrix.
     * @readonly
     */

    /*
     *      data: [
     *          [ leftId, rightId, -1/0/1 ],   // === DELETED/UNMODIFIED/ADDED
     *          ...
     *      ],
     *      
     *      left: new Side({
     *          matrix: me,
     *          index: 0,
     *          inverse: right,
     *          slices: {
     *              leftId: new Slice({
     *                  id: leftId,
     *                  side: left,
     *                  members: {
     *                      rightId: data[0]
     *                  }
     *              })
     *          }
     *      },
     *      
     *      right: new Side({
     *          matrix: me,
     *          index: 1,
     *          inverse: left,
     *          slices: {
     *              rightId: new Slice({
     *                  id: rightId,
     *                  side: right,
     *                  members: {
     *                      leftId: data[0]
     *                  }
     *              })
     *          })
     *      }
     */

    constructor (session, matrix) {
        let me = this;
        let association = matrix.isManyToMany ? matrix : session.schema.getAssociation(matrix);
        let left = new Side(me, 0, association.left);
        let right = new Side(me, 1, association.right);

        //<debug>
        assert(association.isManyToMany, 'Association is not many-to-many');
        //</debug>

        me.association = association;
        me.session = session;

        me.left = left;
        me.right = right;

        left.inverse = right;
        right.inverse = left;
    }

    destroy () {
        let me = this;

        me.left.destroy();
        me.right.destroy();

        me.association = me.session = me.left = me.right = null;
    }

    commit () {
        this.left.commit();
        this.right.commit();
    }

    update (id1, id2, state) {
        return this.left.update(id1, id2, state);
    }

    updateId (record, oldId, newId) {
        let Type = record.constructor;
        let left = this.left;
        let right = this.right;
        let matchSide;

        // Are we interested in this record? Check types
        if (Type === left.role.cls) {
            matchSide = left;
        }

        if (Type === right.role.cls) {
            matchSide = right;
        }

        if (matchSide) {
            matchSide.updateId(oldId, newId);
        }
    }
}

export { Matrix };
