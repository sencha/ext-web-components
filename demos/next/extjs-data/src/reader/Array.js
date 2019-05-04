import {
    //<debug>
    assert,
    //</debug>
    define
} from '../../../extjs-core/src';

import { JsonReader } from './Json';

/**
 * Data reader class to create an Array of {@link Model} objects from an Array.
 * Each element of that Array represents a row of data fields. The
 * fields are pulled into a Record object using as a subscript, the `mapping` property
 * of the field definition if it exists, or the field's ordinal position in the definition.
 *
 * ##Example code:
 *
 *      class Employee extends Model {
 *          fields: [
 *              'id',
 *              // "mapping" only needed if an "id" field is present which
 *              // precludes using the ordinal position as the index.
 *              { name: 'name', mapping: 1 },
 *              { name: 'occupation', mapping: 2 }
 *          ]
 *      }
 *
 *       var myReader = new ArrayReader({
 *            model: 'Employee'
 *       }, Employee);
 *
 * This would consume an Array like this:
 *
 *      [ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]
 *
 */
@define({
    type: 'array'
})
class ArrayReader extends JsonReader {
    //<debug>
    updatePreserveRawData (v) {
        assert(!v, 'ArrayReader cannot use preserveRawData');
    }
    //</debug>
}

export { ArrayReader };
