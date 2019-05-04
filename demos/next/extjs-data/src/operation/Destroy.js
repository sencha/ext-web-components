import { define } from '../../../extjs-core/src';

import { Operation } from './Operation';

/**
 * Encapsulates a destroy operation as performed by a {@link Proxy proxy}.
 *
 * This class is instantiated by {@link Store stores} and {@link Model records} and
 * should not need to be instantiated in user code.
 */
@define({
    type: 'destroy',

    tags: {
        action: 'destroy'
    },
    
    prototype: {
        order: 30,
        foreignKeyDirection: -1
    }
})
class DestroyOperation extends Operation {
    doProcess (/* resultSet, request, response */) {
        let clientRecords = this.records;
        let clientLen = clientRecords.length;
        let i;
        
        for (i = 0; i < clientLen; ++i) {
            clientRecords[i].setErased();
        }
    }
    
    doExecute () {
        return this.proxy.erase(this);
    }

    getRecordData (record) {
        let data = {};
        let idField = record.idField;
        let nameProperty = this.nameProperty || 'name';

        data[idField[nameProperty]] = record.id;

        return data;
    }
}

export { DestroyOperation };
