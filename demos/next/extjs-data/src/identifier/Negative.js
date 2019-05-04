import { define, config } from '../../../extjs-core/src';

import { SequentialIdentifier } from './Sequential';

/**
 * This class id generator produces successive negative numbers for id's. That is, -1, -2,
 * etc..
 *
 * The advantage of this type of `identifier` is that these are seldom valid server-side
 * id values (which typically start at 1 and increase from there) but are of the same
 * data type (integer). This means that these values can typically be deserialized by a
 * server and then recognized as provisionally generated.
 */
@define({
    type: 'negative'
})
class NegativeIdentifier extends SequentialIdentifier {
    @config
    increment = -1;

    @config
    seed = -1;
}

export { NegativeIdentifier };
