import { define } from '../../../extjs-core/src';

import { Summary } from './Summary';

/**
 * Calculates the minimum for a set of data.
 */
@define({
    type: 'min'
})
class MinSummary extends Summary {
    calculate (records, property, root, begin, end) {
        let min = this.extractValue(records[begin], property, root);
        let i, v;

        for (i = begin; i < end; ++i) {
            v = this.extractValue(records[i], property, root);
            
            if (v < min) {
                min = v;
            }
        }

        return min;
    }
}

export { MinSummary };
