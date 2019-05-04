import { define } from '../../../extjs-core/src';

import { Summary } from './Summary';

/**
 * Calculates the sum for a set of data.
 */
@define({
    type: 'sum'
})
class SumSummary extends Summary {
    calculate (records, property, root, begin, end) {
        let n = end - begin;
        let i, sum, v;

        for (i = 0; i < n; ++i) {
            v = this.extractValue(records[begin + i], property, root);
            sum = i ? sum + v : v;
        }

        return sum;
    }
}

export { SumSummary };
