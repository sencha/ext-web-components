import { define, config } from '../../../extjs-core/src';

import { Role } from './Role';

//--------------------------------------------------------------------------------

@define({
    prototype: {
        createSetter: null  // no setter for an isMany side
    }
})
class Many extends Role {
    @config
    store = null;
    
    adoptAssociated (record, session) {
        let store = this.getAssociatedItem(record);
        let rec;

        if (store) {
            store.session = session;

            this.onStoreCreate(store, session, record.id);

            for (rec of store.data.items) {
                session.adopt(rec);
            }
        }
        
        return store;
    }

    createGetter () {
        let me = this;

        // NOTE: not => fn!
        return function (options, scope, leftRecords) {
            // 'this' refers to the record inside this function
            return me.getAssociatedStore(this, options, scope, leftRecords, true);
        };
    }

    processUpdate (session, associationData) {
        let me = this;
        let entityType = me.inverse.cls;
        let items = associationData.R;
        let id, rightRecord, store, leftRecords;

        if (items) {
            for (id in items) {
                rightRecord = session.peekRecord(entityType, id);
                
                if (rightRecord) {
                    leftRecords = session.getEntityList(me.cls, items[id]);
                    store = me.getAssociatedItem(rightRecord);
                    
                    if (store) {
                        store.loadData(leftRecords);
                        store.complete = true;
                    }
                    else {
                        // We don't have a store. Create it and add the records.
                        rightRecord[me.getterName](null, null, leftRecords);
                    }
                }
                else {
                    session.onInvalidAssociationEntity(entityType, id);
                }
            }
        }
    }
}

export { Many };
