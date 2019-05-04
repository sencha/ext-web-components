import { define, config, identityFn } from '../../../extjs-core/src';

import { Operation } from './Operation';

/**
 * Encapsulates a create operation as performed by a {@link Proxy proxy}.
 *
 * This class is instantiated by {@link Store stores} and {@link Model records} and
 * should not need to be instantiated in user code.
 */
@define({
    type: 'create',
    
    tags: {
        action: 'create'
    },

    prototype: {
        order: 10
    }
})
class CreateOperation extends Operation {
    @config
    recordCreator = identityFn;
    
    doExecute () {
        return this.proxy.create(this);
    }
}

export { CreateOperation };
