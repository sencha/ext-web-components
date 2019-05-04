import { define } from '../../../extjs-core/src';

import { SumSummary } from './Sum';

/**
 * Calculates the average for a set of data.
 */
@define({
    type: 'average',
    alias: 'summary.avg'
})
class AverageSummary extends SumSummary {
    calculate (records, property, root, begin, end) {
        let len = end - begin;
        let value;

        if (len > 0) {
            value = super.calculate(records, property, root, begin, end) / len;
        }

        return value;
    }
}

export { AverageSummary };
