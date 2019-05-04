import { define, config, identityFn } from '../../../extjs-core/src';

import { Operation } from './Operation';

/**
 * Encapsulates a update operation as performed by a {@link Ext.data.proxy.Proxy proxy}.
 *
 * This class is instantiated by {@link Store stores} and {@link Model records}
 * and should not need to be instantiated in user code.
 */
@define({
    type: 'update',
    
    tags: {
        action: 'update'
    },
    
    prototype: {
        order: 20
    }
})
class UpdateOperation extends Operation {
    @config
    recordCreator = identityFn;
    
    doExecute () {
        return this.proxy.update(this);
    }
}

export { UpdateOperation };
