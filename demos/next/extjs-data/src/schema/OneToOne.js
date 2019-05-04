import { define } from '../../../extjs-core/src';

import { Association } from './Association';
import { Role } from './Role';

/**
 * **This class is never created directly. It should be constructed through associations
 * in `Model`.**
 *
 * This is a specialized version of `ManyToOne` that declares a relationship between
 * a single  entity type and a single related entities. The relationship can be declared as a keyed
 * or keyless relationship.
 *
 *     // Keyed
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: ['id', 'name', {
 *             name: 'userInfoId',
 *             reference: {
 *                 type: 'UserInfo',
 *                 unique: true
 *             }
 *         }]
 *     });
 *
 *     Ext.define('UserInfo', {
 *         extend: 'Model',
 *         fields: ['id', 'secretKey']
 *     });
 *
 *     // Keyless
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: ['id', 'name'],
 *         hasOne: 'UserInfo'
 *     });
 *
 *     Ext.define('Ticket', {
 *         extend: 'Model',
 *         fields: ['id', 'secretKey']
 *     });
 *
 *     // Generated methods
 *     var user = new User();
 *     user.getUserInfo();
 *     user.setUserInfo();
 *     
 *     var info = new UserInfo();
 *     info.getUser();
 *     info.setUser();
 *     
 *
 *     var ticket = new Ticket();
 *     ticket.setCustomer(customer);
 *     console.log(ticket.getCustomer()); // The customer object
 *
 * By declaring a keyed relationship, extra functionality is gained that maintains
 * the key field in the model as changes are made to the association. 
 * 
 * For available configuration options, see {@link Reference}.
 * Each record type will have a {@link Association#recordGetter getter} and
 * {@link Association#recordSetter setter}.
 */
@define({
    tags: {
        isOneToOne: true,
    
        isToOne: true,
    
        kind: 'one-to-one'
    }
})
class OneToOne extends Association {
}

//--------------------------------------------------------------------------------

class Left extends Role {
    onDrop (rightRecord, session) {
        let me = this;
        let leftRecord = me.getAssociatedItem(rightRecord);
        
        rightRecord[me.instanceName] = null;
        
        if (leftRecord) {
            leftRecord[me.inverse.instanceName] = null;
        }
    }

    onIdChanged (rightRecord, oldId, newId) {
        let leftRecord = this.getAssociatedItem(rightRecord);
        let fieldName = this.association.getFieldName();

        if (!rightRecord.session && leftRecord && fieldName) {
            leftRecord.set(fieldName, newId);
        }
    }

    createGetter () {
        let me = this;
        
        // NOTE: not => fn!
        return function () {
            // 'this' refers to the record inside this function
            return me.doGet(this);
        };
    }

    createSetter () {
        let me = this;
        
        // NOTE: not => fn!
        return function (value) {
            // 'this' refers to the record inside this function
            return me.doSet(this, value);
        };
    }

    doGet (rightRecord) {
        // Consider the Department entity with a managerId to a User entity. The
        // Department is on the left (the FK holder's side) so we are implementing the
        // guts of the getManagerDepartment method we place on the User entity. Since
        // we represent the "managerDepartment" role and as such our goal is to get a
        // Department instance, we start that from the User (rightRecord). Sadly that
        // record has no FK back to us.
        let instanceName = this.instanceName; // ex "managerDepartment"
        let ret = rightRecord[instanceName];
        let session = rightRecord.session;

        if (!ret && session) {
            // @TODO: session - we'll cache the result on the record as always
            // but to get it we must ask the session
        }

        return ret || null;
    }

    doSet (rightRecord, leftRecord) {
        // We are the guts of the setManagerDepartment method we place on the User
        // entity. Our goal here is to establish the relationship between the new
        // Department (leftRecord) and the User (rightRecord).
        let instanceName = this.instanceName; // ex "managerDepartment"
        let ret = rightRecord[instanceName];
        let inverseSetter = this.inverse.setterName; // setManager for Department

        if (ret !== leftRecord) {
            rightRecord[instanceName] = leftRecord;

            if (inverseSetter) {
                // Because the FK is owned by the inverse record, we delegate the
                // majority of work to its setter. We've already locked in the only
                // thing we keep on this side so we won't recurse back-and-forth.
                leftRecord[inverseSetter](rightRecord);
            }
            
            rightRecord.onAssociatedRecordSet(leftRecord, this);
        }

        return ret;
    }

    read (rightRecord, node, fromReader, readOptions) {
        let me = this;
        let leftRecords = super.read(rightRecord, node, fromReader, readOptions);
        let leftRecord;

        if (leftRecords) {
            leftRecord = leftRecords[0];
            
            if (leftRecord) {
                leftRecord[me.inverse.instanceName] = rightRecord;

                rightRecord[me.instanceName] = leftRecord;
                // Inline associations should *not* arrive on the "data" object:
                delete rightRecord.data[me.role];
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
    createGetter () {
        // As the target of the FK (say "manager" for the Department entity) this
        // getter is responsible for getting the entity referenced by the FK value.
        let me = this;

        // NOTE: not => fn!
        return function (options, scope) {
            // 'this' refers to the record inside this function
            return me.doGetFK(this, options, scope);
        };
    }
    
    createSetter () {
        let me = this;

        // NOTE: not => fn!
        return function (value, options, scope) {
            // 'this' refers to the record inside this function
            return me.doSetFK(this, value, options, scope);
        };
    }

    onDrop (leftRecord, session) {
        let me = this;
        let field = me.association.field;
        let rightRecord = me.getAssociatedItem(leftRecord);
        let id;

        if (me.inverse.owner) {
            if (session && field) {
                id = leftRecord.get(field.name);
                
                if (id || id === 0) {
                    rightRecord = session.getEntry(me.cls, id).record;
                    
                    if (rightRecord) {
                        rightRecord.drop();
                    }
                }
            }
            else {
                if (rightRecord) {
                    rightRecord.drop();
                }
            }
        }
         
        if (field) {
            leftRecord.set(field.name, null);
        }
        
        leftRecord[me.instanceName] = null;
        
        if (rightRecord) {
            rightRecord[me.inverse.instanceName] = null;
        }
    }

    onValueChange (leftRecord, session, newValue) {
        // Important to get the record before changing the key.
        let me = this;
        let rightRecord = leftRecord[me.oldInstanceName] || me.getAssociatedItem(leftRecord);
        let hasNewValue = newValue || newValue === 0;
        let instanceName = me.instanceName;
        let cls = me.cls;

        leftRecord.changingKey = true;
        me.doSetFK(leftRecord, newValue);
        
        if (!hasNewValue) {
            leftRecord[instanceName] = null;
        }
        else if (session && cls) {
            // Setting to undefined is important so that we can load the record later.
            leftRecord[instanceName] = session.peekRecord(cls, newValue) || undefined;
        }
        
        if (me.inverse.owner && rightRecord) {
            me.association.schema.checkCascadeDelete(rightRecord, me);
        }
        
        leftRecord.changingKey = false;
    }

    checkKeyForDrop (rightRecord) {
        let leftRecord = this.inverse.getAssociatedItem(rightRecord);
        
        if (!leftRecord) {
            // Not reassigned to another parent
            rightRecord.drop();
        }
    }
    
    read (leftRecord, node, fromReader, readOptions) {
        let me = this;
        let rightRecords = super.read(leftRecord, node, fromReader, readOptions);
        let rightRecord, field, fieldName, session, refs, id, oldId, setKey, data;

        if (rightRecords) {
            rightRecord = rightRecords[0];
            field = me.association.field;
            
            if (field) {
                fieldName = field.name;
            }
            
            session = leftRecord.session;
            data = leftRecord.data;
            
            if (rightRecord) {
                if (session) {
                    refs = session.getRefs(rightRecord, this.inverse, true);
                    // If we have an existing reference in the session, or we don't and the data
                    // is undefined, allow the nested load to go ahead
                    setKey = (refs && refs[leftRecord.id]) || (data[fieldName] === undefined);
                }
                else {
                    setKey = true;
                }
                
                if (setKey) {
                    // We want to poke the inferred key onto record if it exists, but we don't
                    // want to mess with the dirty or modified state of the record.
                    if (field) {
                        oldId = data[fieldName];
                        id = rightRecord.id;
                        
                        if (oldId !== id) {
                            data[fieldName] = id;
                            
                            if (session) {
                                session.updateReference(leftRecord, field, id, oldId);
                            }
                        }
                    }
                    
                    rightRecord[me.inverse.instanceName] = leftRecord;
                    leftRecord[me.instanceName] = rightRecord;
                }
                
                // Inline associations should *not* arrive on the "data" object:
                delete data[me.role];
            }
        }
    }
}

//--------------------------------------------------------------------------------

OneToOne.Left = Left;
OneToOne.Right = Right;

export { OneToOne };
