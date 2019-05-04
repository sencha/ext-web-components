import { define } from '../../../extjs-core/src';

import { Summary } from './Summary';

/**
 * Calculates the count for a set of data.
 */
@define({
    type: 'count'
})
class CountSummary extends Summary {
    calculate (records, property, root, begin, end) {
        return end - begin;
    }
}

export { CountSummary };
