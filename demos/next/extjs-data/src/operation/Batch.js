import { Watchable, define, config, is } from '../../../extjs-core/src';

/**
 * Provides a mechanism to run one or more {@link Operation operations}
 * in a given order. Fires the `operationcomplete` event after the completion of each
 * Operation, and the `complete` event when all Operations have been successfully executed.
 * Fires an `exception` event if any of the Operations encounter an exception.
 *
 * Usually these are only used internally by {@link Proxy} classes.
 */
@define({
    prototype: {
        /**
         * @property {Number} current
         * The index of the current operation being executed.
         * @private
         */
        current: -1,
    
        /**
         * @property {Number} total
         * The total number of operations in this batch.
         * @private
         */
        total: 0,
    
        /**
         * @property {Boolean} running
         * `true` if this batch is currently running.
         * @private
         */
        running: false,
    
        /**
         * @property {Boolean} complete
         * `true` if this batch has been executed completely.
         * @private
         */
        complete: false,
    
        /**
         * @property {Boolean} exception
         * `true` if this batch has encountered an exception. This is cleared at the start
         * of each operation.
         * @private
         */
        exception: false
    }
})
class BatchOperation extends Watchable {
    /**
     * @cfg {Boolean} pauseOnException
     * True to pause the execution of the batch if any operation encounters an exception
     * (defaults to false). If you set this to true you are responsible for implementing
     * the appropriate handling logic and restarting or discarding the batch as needed.
     * There are different ways you could  do this, e.g. by handling the batch's
     * {@link #event!exception} event directly, or perhaps by overriding
     * {@link ProxyStore#onBatchException onBatchException} at the store level.
     * If you do pause and attempt to handle the exception you can call {@link #retry} to
     * process the same operation again. 
     * 
     * Note that {@link Operation operations} are atomic, so any operations that may have
     * succeeded prior to an exception (and up until pausing the batch) will be finalized
     * at the server level and will not be automatically reversible. Any transactional or
     * rollback behavior that might be desired would have to be implemented at the
     * application level.
     * 
     * Pausing on exception will likely be most beneficial when used in coordination with
     * such a scheme, where an exception might actually affect subsequent operations in
     * the same batch and so should be handled before continuing with the next operation.
     * 
     * If you have not implemented transactional operation handling then this option should
     * typically be left  to the default of false (e.g. process as many operations as
     * possible, and handle any exceptions sequentially or in parallel without holding up
     * the rest of the batch).
     */
    @config
    pauseOnException = false;

    //---------------------------------------------------------------------------------
    // Life-cycle

    ctor () {
        /**
         * @property {Operation[]} exceptions
         * Ordered array of operations that raised an exception during the most recent
         * batch execution and did not successfully complete.
         * @readonly
         */
        this.exceptions = [];
        
        /**
         * @property {Operation[]} operations
         * Ordered array of operations that will be executed by this batch.
         * @readonly
         */
        this.operations = [];
    }
    
    dtor () {
        let me = this;
        let op;
        
        if (me.running) {
            me.abort();
        }
        
        for (op of me.operations) {
            if (op) {
                if (!op.destroyed && !op.$destroyOwner) {
                    op.destroy();
                }
            }
        }
        
        me.operations = me.exceptions = null;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    abort () {
        let me = this;
        let op;
        
        if (me.running) {
            op = me.getCurrent();
            
            if (!op.destroyed) {
                op.abort();
            }
        }
        
        me.running = false;
        me.aborted = true;
        me.current = undefined;
    }

    /**
     * Adds a new operation to this batch at the end of the {@link #operations} array
     * @param {Operation/Operation[]} operation The {@link Operation} object or an array
     * of `Operation` objects.
     * @return {BatchOperation} this
     */
    add (operation) {
        let me = this;
        let op;
            
        if (is.array(operation)) {
            for (op of operation) {
                me.add(op);
            }
        }
        else {
            ++me.total;
    
            operation.batch = me;

            me.operations.push(operation);
        }
        
        return me;
    }
    
    /**
     * Returns the currently running `Operation`. Will return `null` if the batch has
     * not started or is completed.
     * @return {Operation}
     */
    getCurrent () {
        let me = this;
        let current = me.current;
        let out = null;
            
        if (!(current === -1 || me.complete)) {
            out = me.operations[current];
        }
        
        return out;
    }

    /**
     * Pauses execution of this batch, but does not cancel the current operation.
     * @return {BatchOperation} this
     */
    pause () {
        this.running = false;
        
        return this;
    }

    /**
     * Kicks off execution of the batch, continuing from the current operation. This is intended
     * for restarting a {@link #pause paused} batch after an exception, and the operation that
     * raised the exception will now be retried. The batch will then continue with its normal
     * processing until all operations are complete or another exception is encountered.
     * 
     * Note that if the batch is already running any call to retry will be ignored.
     * 
     * @return {BatchOperation} this
     */
    retry () {
        return this.start(this.current);
    }

    /**
     * Sorts the `{@link Operation operations}` based on their type and
     * the foreign key dependencies of the entities. Consider a simple Parent and Child
     * case where the Child has a "parentId" field. If this batch contains two `create`
     * operations, one of a Parent and one for its Child, the server must receive and
     * process the `create` of the Parent before the Child can be created.
     *
     * In the case of `destroy` operations this order is reversed. The Child entity must be
     * destroyed before the Parent to avoid any foreign key constraints (a Child with an
     * invalid parentId field).
     *
     * Further, `create` operations must all occur before `update` operations to ensure
     * that all entities exist that might be now referenced by the updates. The created
     * entities can safely reference already existing entities.
     *
     * Finally, `destroy` operations are sorted after `update` operations to allow those
     * updates to remove references to the soon-to-be-deleted entities.
     */
    sort () {
        this.operations.sort(BatchOperation.sortFn);
    }

    /**
     * Kicks off execution of the batch, continuing from the next operation if the previous
     * operation encountered an exception, or if execution was paused. Use this method to start
     * the batch for the first time or to restart a paused batch by skipping the current
     * unsuccessful operation.
     * 
     * To retry processing the current operation before continuing to the rest of the batch (e.g.
     * because you explicitly handled the operation's exception), call {@link #retry} instead.
     * 
     * Note that if the batch is already running any call to start will be ignored.
     * @param {Number} [index] (private)
     * @return {BatchOperation} this
     */
    start (index) {
        let me = this;
        
        if (!me.destroyed && me.operations.length && !me.running) {
            me.exceptions.length = 0;
            me.exception = false;
            me.running = true;
    
            me.runOperation((index == null) ? me.current + 1 : index);
        }
        
        return me;
    }
    
    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)
    
    onOperationComplete (operation) {
        let me = this;
        let exception = operation.exception;
            
        if (exception) {
            me.exception = true;
            me.exceptions.push(operation);
            me.fireEvent('exception', me, operation);
        }

        if (exception && me.pauseOnException) {
            me.pause();
        }
        else {
            me.fireEvent('operationcomplete', me, operation);
            me.runNextOperation();
        }
    }

    /**
     * Runs the next operation, relative to this.current.
     * @return {BatchOperation} this
     * @private
     */
    runNextOperation () {
        let me = this;
        
        if (me.running) {
            me.runOperation(me.current + 1);
        }
        
        return me;
    }

    /**
     * Executes an operation by its numeric index in the {@link #operations} array
     * @param {Number} index The operation index to run
     * @private
     */
    runOperation (index) {
        let me = this;
        let operations = me.operations;
        let operation = operations[index];

        if (operation === undefined) {
            me.running = false;
            me.complete = true;

            me.fireEvent('complete', me, operations[operations.length - 1]);
        }
        else {
            me.current = index;
            operation.internalCallback = op => me.onOperationComplete(op);
            operation.execute();
        }
    }

    static sortFn (lhs, rhs) {
        let ret = lhs.order - rhs.order;
        let entityLhs, entityRhs;
        
        if (!ret && (entityLhs = lhs.entityType) && (entityRhs = rhs.entityType)) {
            // Since order is equal, the operations are the same type. ReadOperation's
            // have no records, so report equality. Otherwise, order by entity rank.
            ret = (entityLhs.rank - entityRhs.rank) * lhs.foreignKeyDirection;
        }
        
        return ret;
    }

    /**
     * @event complete
     * Fired when all operations of this batch have been completed
     * @param {BatchOperation} batch The batch object
     * @param {Object} operation The last operation that was executed
     */

    /**
     * @event exception
     * Fired when a operation encountered an exception
     * @param {BatchOperation} batch The batch object
     * @param {Object} operation The operation that encountered the exception
     */

    /**
     * @event operationcomplete
     * Fired when each operation of the batch completes
     * @param {BatchOperation} batch The batch object
     * @param {Object} operation The operation that just completed
     */
}

export { BatchOperation };
