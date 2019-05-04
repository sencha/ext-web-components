import { ChangesVisitor } from './ChangesVisitor';

/**
 * This visitor class adds extra capability to consider changes as they would be considered
 * for a parent session.
 * @protected
 */
class ChildChangesVisitor extends ChangesVisitor {
    constructor (session) {
        super(session);

        this.seen = {};
    }

    onDirtyRecord (record) {
        if (super.onDirtyRecord(record) !== false) {
            // We have a record that we have updated in ourselves, but not in the parent.
            // We need to read it in
            if (!record.$source && (record.dropped || !record.phantom)) {
                this.readEntity(record);
            }
        }
    }

    readEntity (record) {
        let me = this;
        let readKey = me.readKey;
        let name = record.entityName;
        let id = record.id;
        let seen = me.seen;
        let seenKey = name + id;
        let result, bucket;

        if (!seen[seenKey]) {
            seen[seenKey] = true;
    
            result = me.result || (me.result = {});

            bucket = result[name] || (result[name] = {});
            bucket = bucket[readKey] || (bucket[readKey] = []);

            // bucket.push(Ext.apply({}, record.modified, record.data));
            bucket.push({
                // TODO this seems backwards but is what it used to do ...
                ...record.data,
                ...record.modified
            });
        }
    }

    setupOptions (options) {
        return options;
    }
}

export { ChildChangesVisitor };
