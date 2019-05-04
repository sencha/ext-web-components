import { define } from '../../../extjs-core/src';

import { Association } from './Association';
import { Many } from './Many';

/**
 * This relationship describes the case where any one entity of one type may relate to any
 * number of entities of another type, and also in the reverse.
 * 
 * This form of association cannot store id's in the related entities since that would
 * limit the number of related entities to one for the entity with the foreign key. Instead,
 * these relationships are typically implemented using a so-called "matrix" table. This
 * table typically has two columns to hold the id's of a pair of related entities. This
 * pair of id's is unique in the matrix table.
 * 
 * # Declaration Forms
 * 
 *      // Fully spelled out - all properties are their defaults:
 *      
 *      Ext.define('App.models.Group', {
 *          extend: 'Model',
 *          
 *          manyToMany: {
 *              UserGroups: {
 *                  type: 'User',
 *                  role: 'users',
 *                  field: 'userId',
 *                  right: {
 *                      field: 'groupId',
 *                      role: 'groups'
 *                  }
 *              }
 *          }
 *      });
 *
 *      // Eliminate "right" object and use boolean to indicate Group is on the
 *      // right. By default, left/right is determined by alphabetic order.
 *      
 *      Ext.define('App.models.Group', {
 *          extend: 'Model',
 *          
 *          manyToMany: {
 *              UserGroups: {
 *                  type: 'User',
 *                  role: 'users',
 *                  field: 'userId',
 *                  right: true
 *              }
 *          }
 *      });
 *
 *      // Eliminate object completely and rely on string to name the other type. Still
 *      // keep Group on the "right".
 *      
 *      Ext.define('App.models.Group', {
 *          extend: 'Model',
 *          
 *          manyToMany: {
 *              UserGroups: 'User#'   // '#' is on the side (left or right) of Group
 *          }
 *      });
 *
 *      // Remove explicit matrix name and keep Group on the "right". Generated matrixName
 *      // remains "UserGroups".
 *      
 *      Ext.define('App.models.Group', {
 *          extend: 'Model',
 *          
 *          manyToMany: [
 *              'User#'
 *          ]
 *      });
 *
 *      // Minimal definition but now Group is on the "left" since "Group" sorts before
 *      // "User". Generated matrixName is now "GroupUsers".
 *      
 *      Ext.define('App.models.Group', {
 *          extend: 'Model',
 *          
 *          manyToMany: [
 *              'User'
 *          ]
 *      });
 */
@define({
    tags: {
        isManyToMany: true,
        isToMany: true,
    
        kind: 'many-to-many'
    }
})
class ManyToMany extends Association {
    // class Left
    // class Right
}

//--------------------------------------------------------------------------------

@define({
    prototype: {
        digitRe: /^\d+$/
    }
})
class Left extends Many {
    checkMembership (session, rightRecord) {
        let me = this;
        let matrix = session.getMatrix(me.association, true);

        if (!matrix) {
            return;
        }

        // eslint-disable-next-line vars-on-top
        let side = me.left ? matrix.right : matrix.left;
        let entityType = side.inverse.role.cls;
        let inverse = me.inverse;
        let slices = side.slices;
        let slice, id, members, member, leftRecord, store;
            
        if (slices && (slice = slices[rightRecord.id]) && (members = slice.members)) {
            for (id in members) {
                member = members[id];
                
                if (member[2] !== -1) {
                    // Do we have the record in the session?
                    // If so, do we also have the store?
                    leftRecord = session.peekRecord(entityType, id);
                    
                    if (leftRecord) {
                        store = inverse.getAssociatedItem(leftRecord);
                        
                        if (store) {
                            store.matrixUpdate = 1;
                            store.add(rightRecord);
                            store.matrixUpdate = 0;
                        }
                    }
                }
            }
        }
    }

    findRecords (session, rightRecord, leftRecords) {
        let cls = this.cls;
        let slice = session.getMatrixSlice(this.inverse, rightRecord.id);
        let members = slice.members;
        let ret = [];
        let id, leftRecord, member, seen;

        if (leftRecords) {
            seen = {};
            
            // Loop over the records returned by the server and
            // check they all still belong
            for (leftRecord of leftRecords) {
                id = leftRecord.id;
                member = members[id];
                
                if (!(member && member[2] === -1)) {
                    ret.push(leftRecord);
                }
                
                seen[id] = true;
            }
        }

        // Loop over the expected set and include any missing records.
        for (id in members) {
            member = members[id];
            
            if (!seen || !seen[id] && (member && member[2] !== -1)) {
                leftRecord = session.peekRecord(cls, id);
                
                if (leftRecord) {
                    ret.push(leftRecord);
                }
            }
        }
        
        return ret;
    }

    /**
     * This method is called when records are added to the association store. If this
     * is happening as a side-effect of the underlying matrix update, we skip telling
     * the matrix what it already knows. Otherwise we need to tell the matrix of the
     * changes on this side so that they can be reflected on the other side.
     * @private
     */
    onAddToMany (store, leftRecords, load) {
        if (!store.matrixUpdate) {
            store.matrixUpdate = 1;

            // By default the "load" param is really the index, but we call this manually
            // in a few spots to indicate it's a default load
            store.matrix.update(leftRecords, load === true ? 0 : 1);

            store.matrixUpdate = 0;
        }
    }

    onIdChanged (rightRecord, oldId, newId) {
        let store = this.getAssociatedItem(rightRecord);

        if (store) {
            store.getFilters().get(this.$roleFilterId).value = newId;
        }
    }

    onMatrixUpdate (matrixSlice, id, state) {
        let store = matrixSlice.store;
        let index, leftRecord, entry;

        if (store && !store.loading && !store.matrixUpdate) {
            store.matrixUpdate = 1;

            index = store.indexOfId(id);
            
            if (state < 0) {
                if (index >= 0) {
                    store.remove([ index ]);
                }
            }
            else if (index < 0) {
                entry = store.session.getEntry(this.type, id);
                leftRecord = entry && entry.record;

                if (leftRecord) {
                    store.add(leftRecord);
                }
            }

            store.matrixUpdate = 0;
        }
    }

    /**
     * This method is called when records are removed from the association store. The
     * same logic applies here as in onAddToMany with respect to the update that may
     * or may not be taking place on the underlying matrix.
     * @private
     */
    onRemoveFromMany (store, records) {
        if (!store.matrixUpdate) {
            store.matrixUpdate = 1;

            store.matrix.update(records, -1);

            store.matrixUpdate = 0;
        }
    }

    onStoreCreate (store, session, id) {
        let me = this;
        let matrix;

        if (session) {
            // If we are creating a store of say Groups in a UserGroups matrix, we want
            // to traverse the inverse side of the matrix (Users) because the id we have
            // is that of the User to which these Groups are associated.
            matrix = session.getMatrixSlice(me.inverse, id);

            matrix.attach(store);
            matrix.notify = me.onMatrixUpdate;
            matrix.scope = me;
        }
    }

    processLoad (store, rightRecord, leftRecords, session) {
        let ret = leftRecords;
        
        if (session) {
            ret = this.findRecords(session, rightRecord, leftRecords);
            this.onAddToMany(store, ret, true);
        }
        
        return ret;
    }

    processMatrixBlock (session, leftKeys, state) {
        let inverse = this.inverse;
        let digitRe = this.digitRe;
        let slice, id;

        if (leftKeys) {
            for (id in leftKeys) {
                // We may not have the record available to pull out the id, so the best we can
                // do here is try to detect a number id.
                if (digitRe.test(id)) {
                    id = parseInt(id, 10);
                }
                
                slice = session.getMatrixSlice(inverse, id);
                slice.update(leftKeys[id], state);
            }
        }
    }

    processUpdate (session, associationData) {
        super.processUpdate(session, associationData);
        
        this.processMatrixBlock(session, associationData.C, 1);
        this.processMatrixBlock(session, associationData.D, -1);
    }

    read (rightRecord, node, fromReader, readOptions) {
        let me = this;
        let leftRecords = super.read(rightRecord, node, fromReader, readOptions);
        
        if (leftRecords) {
            // Create the store and dump the data
            rightRecord[me.getterName](null, null, leftRecords);
            // Inline associations should *not* arrive on the "data" object:
            delete rightRecord.data[me.role];
        }
    }
}

//--------------------------------------------------------------------------------

@define({
    tags: {
        left: false,
        side: 'right'
    }
})
class Right extends Left {
    //
}

//--------------------------------------------------------------------------------

ManyToMany.Left = Left;
ManyToMany.Right = Right;

export { ManyToMany };
