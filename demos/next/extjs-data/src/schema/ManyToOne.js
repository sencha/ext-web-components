import { define } from '../../../extjs-core/src';

import { Association } from './Association';
import { Many } from './Many';
import { Role } from './Role';

/**
 * **This class is never created directly. It should be constructed through associations
 * in `Model`.**
 *
 * Declares a relationship between a single entity type and multiple related entities.
 * The relationship can be declared as a keyed or keyless relationship.
 *
 *     // Keyed
 *     Ext.define('Customer', {
 *         extend: 'Model',
 *         fields: ['id', 'name']
 *     });
 *
 *     Ext.define('Ticket', {
 *         extend: 'Model',
 *         fields: ['id', 'title', {
 *             name: 'customerId',
 *             reference: 'Customer'
 *         }]
 *     });
 *
 *     // Keyless
 *     Ext.define('Customer', {
 *         extend: 'Model',
 *         fields: ['id', 'name'],
 *         hasMany: 'Ticket'
 *     });
 *
 *     Ext.define('Ticket', {
 *         extend: 'Model',
 *         fields: ['id', 'title']
 *     });
 *
 *     // Generated methods
 *     var customer = new Customer();
 *     customer.tickets();
 *
 *     var ticket = new Ticket();
 *     ticket.getCustomer();
 *     ticket.setCustomer();
 *
 * By declaring a keyed relationship, extra functionality is gained that maintains
 * the key field in the model as changes are made to the association. 
 * 
 * For available configuration options, see {@link Reference}.
 * The "one" record type will have a generated {@link Association#storeGetter}.
 * The "many" record type will have a {@link Association#recordGetter getter}
 * and {@link Association#recordSetter setter}.
 */
@define({
    tags: {
        isManyToOne: true,
        isToOne: true,
    
        kind: 'many-to-one'
    }
})
class ManyToOne extends Association {
    // class Left
    // class Right
}

//--------------------------------------------------------------------------------

@define
class Left extends Many {
    findRecords (session, rightRecord, leftRecords, allowInfer) {
        let ret = leftRecords;
        let refs = session.getRefs(rightRecord, this, true);
        let field = this.association.field;
        let fieldName, leftRecord, id, i, len, seen;

        if (field && (refs || allowInfer)) {
            fieldName = field.name;
            ret = [];

            if (leftRecords) {
                seen = {};
                
                // Loop over the records returned by the server and
                // check they all still belong. If the session doesn't have any prior knowledge
                // and we're allowed to infer the parent id (via nested loading), only do so if
                // we explicitly have an id specified
                for (i = 0, len = leftRecords.length; i < len; ++i) {
                    leftRecord = leftRecords[i];
                    id = leftRecord.id;
                    
                    if (refs && refs[id]) {
                        ret.push(leftRecord);
                    }
                    else if (allowInfer && leftRecord.data[fieldName] === undefined) {
                        ret.push(leftRecord);
                        leftRecord.data[fieldName] = rightRecord.id;

                        session.updateReference(leftRecord, field, rightRecord.id, undefined);
                    }
                    
                    seen[id] = true;
                }
            }

            // Loop over the expected set and include any missing records.
            if (refs) {
                for (id in refs) {
                    if (!seen || !seen[id]) {
                        ret.push(refs[id]);
                    }
                }
            }
        }

        return ret;
    }

    onDrop (rightRecord, session) {
        let me = this;
        let store = me.getAssociatedItem(rightRecord);
        let id, leftRecords, rec;

        if (store) {
            // Removing will cause the foreign key to be set to null.
            leftRecords = store.removeAll();
            
            if (leftRecords && me.inverse.owner) {
                // If we're a child, we need to destroy all the "tickets"
                for (rec of leftRecords) {
                    rec.drop();
                }
            }

            store.destroy();
            rightRecord[me.storeName] = null;
        }
        else if (session) {
            leftRecords = session.getRefs(rightRecord, me);
            
            if (leftRecords) {
                for (id in leftRecords) {
                    leftRecords[id].drop();
                }
            }
        }
    }

    onAddToMany (store, leftRecords) {
        let me = this;
        let rightRecord = store.associatedEntity;

        if (me.association.field) {
            me.syncFK(leftRecords, rightRecord, false);
        }
        else {
            me.setInstances(rightRecord, leftRecords);
        }
    }

    onIdChanged (rightRecord, oldId, newId) {
        let me = this;
        let fieldName = me.association.getFieldName();
        let store = me.getAssociatedItem(rightRecord);
        let filter, rec;

        if (store) {
            filter = store.filters.get(me.$roleFilterId);
            
            if (filter) {
                filter.value = newId;
            }
            
            // A session will automatically handle this updating. If we don't have a field
            // then there's nothing to do here.
            if (!rightRecord.session && fieldName) {
                for (rec of store.getDataSource().items) {
                    rec.set(fieldName, newId);
                }
            }
        }
    }

    onLoadMany (rightRecord, leftRecords, session) {
        this.setInstances(rightRecord, leftRecords, session);
    }

    onRemoveFromMany (store, leftRecords) {
        if (this.association.field) {
            this.syncFK(leftRecords, store.associatedEntity, true);
        }
        else {
            this.setInstances(null, leftRecords);
        }
    }

    processLoad (store, rightRecord, leftRecords, session) {
        let ret = leftRecords;

        if (session) {
            // Allow infer here, we only get called when loading an associated store
            ret = this.findRecords(session, rightRecord, leftRecords, true);
        }
        
        this.onLoadMany(rightRecord, ret, session);
        
        return ret;
    }

    read (rightRecord, node, fromReader, readOptions) {
        let me = this;
        // Use the inverse role here since we're setting ourselves on the other record:
        let instanceName = me.inverse.instanceName;
        let leftRecords = super.read(rightRecord, node, fromReader, readOptions);
        let rec, store;
        
        if (leftRecords) {
            // Create the store and dump the data
            store = rightRecord[me.getterName](null, null, leftRecords);
            // Inline associations should *not* arrive on the "data" object:
            delete rightRecord.data[me.role];

            leftRecords = store.data.items;

            for (rec of leftRecords) {
                rec[instanceName] = rightRecord;
            }
        }
    }

    setInstances (rightRecord, leftRecords, session) {
        let instanceName = this.inverse.instanceName;
        let id = rightRecord ? rightRecord.id : null;
        let field = this.association.field;
        let leftRecord, oldId, data, name;

        for (leftRecord of leftRecords) {
            leftRecord[instanceName] = rightRecord;
            
            if (field) {
                name = field.name;
                data = leftRecord.data;
                oldId = data[name];
                
                if (oldId !== id) {
                    data[name] = id;
                    
                    if (session) {
                        session.updateReference(leftRecord, field, id, oldId);
                    }
                }
            }
        }
    }

    syncFK (leftRecords, rightRecord, clearing) {
        // We are called to set things like the FK (ticketId) of an array of Comment
        // entities. The best way to do that is call the setter on the Comment to set
        // the Ticket. Since we are setting the Ticket, the name of that setter is on
        // our inverse role.
        let foreignKeyName = this.association.getFieldName();
        let inverse = this.inverse;
        let setter = inverse.setterName; // setTicket
        let instanceName = inverse.instanceName;
        let i = leftRecords.length;
        let id = rightRecord.id;
        let different, leftRecord, val;

        while (i-- > 0) {
            leftRecord = leftRecords[i];
            different = !leftRecord.isEqual(id, leftRecord.get(foreignKeyName));

            val = clearing ? null : rightRecord;
            
            if (different !== clearing) {
                // clearing === true
                //      different === true  :: leave alone (not associated anymore)
                //   ** different === false :: null the value (no longer associated)
                //
                // clearing === false
                //   ** different === true  :: set the value (now associated)
                //      different === false :: leave alone (already associated)
                //
                leftRecord.changingKey = true;
                leftRecord[setter](val);
                leftRecord.changingKey = false;
            }
            else {
                // Ensure we set the instance, we may only have the key
                leftRecord[instanceName] = val;
            }
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
class Right extends Role {
    checkKeyForDrop (leftRecord) {
        let field = this.association.field;
        
        if (leftRecord.get(field.name) === null) {
            leftRecord.drop();
        }
    }
    
    checkMembership (session, leftRecord) {
        let field = this.association.field;
        let store;

        if (field) {
            store = this.getSessionStore(session, leftRecord.get(field.name));
            
            // Check we're not in the middle of an add to the store.
            if (store && !store.contains(leftRecord)) {
                store.add(leftRecord);
            }
        }
    }

    createGetter () {
        // As the target of the FK (say "ticket" for the Comment entity) this
        // getter is responsible for getting the entity referenced by the FK value.
        let me = this;

        // NOTE: not => fn!
        return function (options, scope) {
            // 'this' refers to the Comment instance inside this function
            return me.doGetFK(this, options, scope);
        };
    }
    
    createSetter () {
        let me = this;

        // NOTE: not => fn!
        return function (rightRecord, options, scope) {
            // 'this' refers to the Comment instance inside this function
            return me.doSetFK(this, rightRecord, options, scope);
        };
    }

    getSessionStore (session, value) {
        // May not have the cls loaded yet
        let cls = this.cls;
        let rec;

        if (cls) {
            rec = session.peekRecord(cls, value);

            if (rec) {
                return this.inverse.getAssociatedItem(rec);
            }
        }
    }

    onDrop (leftRecord, session) {
        // By virtue of being dropped, this record will be removed
        // from any stores it belonged to. The only case we have
        // to worry about is if we have a session but were not yet
        // part of any stores, so we need to clear the foreign key.
        let field = this.association.field;
        
        if (field) {
            leftRecord.set(field.name, null);
        }
        
        leftRecord[this.instanceName] = null;
    }

    onValueChange (leftRecord, session, newValue, oldValue) {
        // If we have a session, we may be able to find the new store this belongs to
        // If not, the best we can do is to remove the record from the associated store/s.
        let me = this;
        let instanceName = me.instanceName;
        let cls = me.cls;
        let hasNewValue, joined, store, i, associated, rightRecord;

        if (!leftRecord.changingKey) {
            hasNewValue = newValue || newValue === 0;
            
            if (!hasNewValue) {
                leftRecord[instanceName] = null;
            }
            
            if (session) {
                // Find the store that holds this record and remove it if possible.
                store = me.getSessionStore(session, oldValue);
                
                if (store) {
                    store.remove(leftRecord);
                }
                
                // If we have a new value, try and find it and push it into the new store.
                if (hasNewValue) {
                    store = me.getSessionStore(session, newValue);
                    
                    if (store && !store.loading) {
                        store.add(leftRecord);
                    }
                    
                    if (cls) {
                        rightRecord = session.peekRecord(cls, newValue);
                    }
                    
                    // Setting to undefined is important so that we can load the record later.
                    leftRecord[instanceName] = rightRecord || undefined;
                }
            }
            else {
                joined = leftRecord.joined;
                
                if (joined) {
                    // Loop backwards because the store remove may cause unjoining, which means 
                    // removal from the joined array.
                    for (i = joined.length - 1; i >= 0; i--) {
                        store = joined[i];
                        
                        if (store.isStore) {
                            associated = store.associatedEntity;
                            
                            if (associated && associated.constructor === me.cls &&
                                associated.id === oldValue) {
                                store.remove(leftRecord);
                            }
                        }
                    }
                }
            }
        }

        if (me.owner && newValue === null) {
            me.association.schema.checkCascadeDelete(leftRecord, me);
        }
    }

    read (leftRecord, node, fromReader, readOptions) {
        let rightRecords = super.read(leftRecord, node, fromReader, readOptions);
        let rightRecord;

        if (rightRecords) {
            rightRecord = rightRecords[0];
            
            if (rightRecord) {
                leftRecord[this.instanceName] = rightRecord;
                delete leftRecord.data[this.role];
            }
        }
    }
}

//--------------------------------------------------------------------------------

ManyToOne.Left = Left;
ManyToOne.Right = Right;

export { ManyToOne };
