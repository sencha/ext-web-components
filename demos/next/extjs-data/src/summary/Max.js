import { define } from '../../../extjs-core/src';

import { Summary } from './Summary';

/**
 * Calculates the maximum for a set of data.
 */
@define({
    type: 'max'
})
class MaxSummary extends Summary {
    calculate (records, property, root, begin, end) {
        let max = this.extractValue(records[begin], property, root);
        let i, v;

        for (i = begin; i < end; ++i) {
            v = this.extractValue(records[i], property, root);
            
            if (v > max) {
                max = v;
            }
        }

        return max;
    }
}

export { MaxSummary };
