import { define, config } from '../../../extjs-core/src';

import { Store } from './Store';

import { MemoryProxy } from '../proxy/Memory';
import { ArrayReader } from '../reader/Array';

/**
 * Small helper class to make creating {@link Store}s from Array data easier. An
 * ArrayStore will be automatically configured with a {@link ArrayReader}.
 *
 * A store configuration would be something like:
 *
 *     let store = new ArrayStore({
 *         fields: [
 *            'company',
 *            {name: 'price', type: 'float'},
 *            {name: 'change', type: 'float'},
 *            {name: 'pctChange', type: 'float'},
 *            {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
 *         ]
 *     });
 *
 * This store is configured to consume a returned object of the form:
 *
 *     let data = [
 *         [ '3m Co',71.72,0.02,0.03,'9/1 12:00am' ],
 *         [ 'Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am' ],
 *         [ 'Boeing Co.',75.43,0.53,0.71,'9/1 12:00am' ],
 *         [ 'Hewlett-Packard Co.',36.53,-0.03,-0.08,'9/1 12:00am' ],
 *         [ 'Wal-Mart Stores, Inc.',45.45,0.73,1.63,'9/1 12:00am' ]
 *     ];
 *
 * An object literal of this form could also be used as the {@link #cfg!data} config option.
 */
@define({
    type: 'array'
})
class ArrayStore extends Store {
    @config
    expandData = false;

    @config
    proxy = {
        type: MemoryProxy,
        reader: {
            type: ArrayReader
        }
    };

    loadData (data, append) {
        if (this.expandData) {
            /* eslint-disable-next-line vars-on-top */
            let inp = data;
            let d;

            data = [];

            for (d of inp) {
                data.push([d]);
            }
        }

        super.loadData(data, append);
    }
}

export { ArrayStore };
