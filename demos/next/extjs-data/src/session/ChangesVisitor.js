import { Visitor } from './Visitor';

/**
 * This class is used internally by `{@link Session#getChanges}` to build an object
 * describing changes in the session. It is not intended for public use but can be used
 * as an example of the visitor `{@link Session#visitData}` requires.
 * @protected
 */
class ChangesVisitor extends Visitor {
    constructor (session) {
        super();

        let me = this;
        let crud = session.crudProperties;

        me.result = null;
        me.session = session;
        me.createKey = crud.create;
        me.readKey = crud.read;
        me.updateKey = crud.update;
        me.dropKey = crud.drop;

        me.writerOptions = {
            /*
             * Keyed by the entityName of a Model, e.g. "Order", and to cache data from
             * Foo.proxy.writer (called "writer" in the pseudo code below):
             *
             *  Foo: {
             *      drop: {
             *          all: writer.writeAllFields,
             *      },
             *      
             *      allDataOptions: {
             *          ...writer.allDataOptions,
             *          serialize: true
             *      },
             *      
             *      partialDataOptions: {
             *          ...writer.partialDataOptions,
             *          serialize: true
             *      }
             *  }
             */
        };
    }
    
    finish () {
        return this.result;
    }

    onDirtyRecord (record) {
        let me = this;
        let created = record.phantom;
        let dropped = record.dropped;
        let crud = me[created ? 'createKey' : (dropped ? 'dropKey' : 'updateKey')];
        let type = record.entityName;
        let prop = (created || dropped) ? 'allDataOptions' : 'partialDataOptions';
        let writerOptions = me.writerOptions;
        let name = record.entityName;
        let options, bucket, entry, result;

        if (created && dropped) {
            return false;
        }

        writerOptions = writerOptions[type] || (writerOptions[type] = {});

        if (dropped) {
            // If the Writer says "writeAllFields" then we want to use allDataOptions
            // for the prop (set already). Otherwise we just want to encode the id.
            if (!(options = writerOptions.drop)) {
                writerOptions.drop = options = {
                    all: record.proxy.writer.writeAllFields
                };
            }
            
            if (!options.all) {
                entry = record.id;
            }
            // else entry is unset so we'll ask for the prop and call record.getData
        }

        if (!entry) {
            // Consult the Writer for the entity to determine its preferences for writing
            // complete or partial data. We rely on the serialization of the record's
            // getData method whereas the Writer has its own ideas on the matter.
            if (!(options = writerOptions[prop])) {
                options = record.proxy.writer[prop];
                writerOptions[prop] = options = me.setupOptions(options);
            }

            entry = record.getData(options);
        }

        //  User: {
        //      C: [
        //          { id: 20, name: 'Don' }
        //      ],
        //      U: [
        //          { id: 30, name: 'Don' }
        //      ],
        //      D: [ 40, 50 ]
        //  }
        result = me.result || (me.result = {});
        bucket = result[name] || (result[name] = {});
        bucket = bucket[crud] || (bucket[crud] = []);
        bucket.push(entry);
    }

    onMatrixChange (association, leftId, rightId, state) {
        let me = this;
        let name = association.left.type; // e.g., "User"
        let assocName = association.right.role; // e.g., "groups"
        let operation = (state < 0) ? me.dropKey : me.createKey;
        let result = me.result || (me.result = {});
        let bucket;

        //  User: {
        //      groups: {
        //          C: {
        //              20: [ 30, 40 ]  // associate User 20 w/Groups 30 & 40
        //          },
        //          D: {
        //              10: [ 50 ]  // disassociate User 10 w/Group 50
        //          }
        //      }
        //  }
        bucket = result[name] || (result[name] = {}); // User
        bucket = bucket[assocName] || (bucket[assocName] = {}); // groups
        bucket = bucket[operation] || (bucket[operation] = {}); // C or D
        bucket = bucket[leftId] || (bucket[leftId] = []);

        bucket.push(rightId);
    }

    setupOptions (options) {
        return {
            ...options,
            serialize: true
        };
    }
}

export { ChangesVisitor };
