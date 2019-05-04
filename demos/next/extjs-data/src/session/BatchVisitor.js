import { BatchOperation } from '../operation';
import { Visitor } from './Visitor';

/**
 * This class is used internally by `{@link Session#getSaveBatch}` and is not intended for
 * direct use. It can be studied as an example of implementing a visitor to pass to
 * `{@link Session#visitData}`.
 * @protected
 */
class BatchVisitor extends Visitor {
    constructor (batch, sort) {
        super();

        if (typeof batch === 'boolean') {
            sort = batch;
            batch = null;
        }

        this.batch = batch;
        this.map = null;
        this.sort = sort;
    }

    finish () {
        let me = this;
        let map = me.map;
        let batch = me.batch;
        let bucket, entity, name, operation, operationType, proxy, batchActions, rec;

        if (map) {
            if (!batch) {
                me.batch = batch = new BatchOperation();
            }

            for (name in map) {
                bucket = map[name];
                entity = bucket.entity; // the entity class
                proxy = entity.proxy;
                batchActions = proxy.batchActions;

                delete bucket.entity; // so we don't think its an operation
                
                for (operationType in bucket) {
                    if (batchActions) {
                        operation = proxy.createOperation({
                            type: operationType,
                            records: bucket[operationType]
                        });

                        operation.entityType = entity;

                        batch.add(operation);
                    }
                    else {
                        for (rec of bucket[operationType]) {
                            operation = proxy.createOperation({
                                type: operationType,
                                records: [ rec ]
                            });

                            operation.entityType = entity;

                            batch.add(operation);
                        }
                    }
                }
            }
        }

        if (batch && me.sort !== false) {
            batch.sort();
        }
        
        return batch;
    }

    onDirtyRecord (record) {
        let me = this;
        let operation = record.phantom ? 'create' : (record.dropped ? 'destroy' : 'update');
        let name = record.entityName;
        let map = me.map || (me.map = {});
        let bucket = map[name] || (map[name] = {
            entity: record.constructor
        });

        //  User: {
        //      entity: User,
        //      create: [
        //          { id: 20, name: 'Don' }
        //      ]
        //  }
        bucket = bucket[operation] || (bucket[operation] = []);

        bucket.push(record);
    }
}

export { BatchVisitor };
