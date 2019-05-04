import { define } from '../../../extjs-core/src';

import { Proxy } from './Proxy';

/**
 * Base class for any client-side storage. Used as a superclass for
 * {@link MemoryProxy} and {@link WebStorageProxy}.
 * Do not use directly, use one of the subclasses instead.
 * @private
 */
@define({
    tags: [
        /**
         * @property {Boolean} synchronous
         * `true` in this class to identify that requests made on this proxy are
         * performed synchronously
         * @readonly
         */
        'synchronous'
    ]
})
class ClientProxy extends Proxy {
    /**
     * @method clear
     * Abstract function that must be implemented by each ClientProxy subclass. This should
     * purge all record data from the client side storage, as well as removing any supporting
     * data (such as lists of record IDs)
     */
}

export { ClientProxy };
