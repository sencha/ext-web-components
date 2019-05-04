import { define, config } from '../../../extjs-core/src';

import { Store } from './Store';

import { AjaxProxy } from '../proxy/Ajax';
import { JsonReader } from '../reader/Json';
import { JsonWriter } from '../writer/Json';

/**
 * Small helper class to make creating {@link Store}s from JSON data easier.
 * A JsonStore will be automatically configured with a {@link JsonReader} and
 * {@link JsonWriter}.
 *
 * A store configuration would be something like:
 *
 *      let store = new JsonStore({
 *          proxy: {
 *              url: '/images',
 *              reader: {
 *                 rootProperty: 'images'
 *             }
 *          },
 *
 *          // Alternatively you can use a Model here
 *          fields: [
 *              'name',
 *              'url',
 *              { name: 'size', type: 'float' },
 *              { name: 'modified', type: 'date' }
 *          ]
 *      });
 *
 * This store is configured to consume a returned object of the form:
 *
 *      {
 *          images: [{
 *              name: 'Image one',
 *              url: '/GetImage.php?id=1',
 *              size: 46.5,
 *              modified: new Date(2019, 2, 29)
 *          }, {
 *              name: 'Image Two',
 *              url: '/GetImage.php?id=2',
 *              size: 43.2,
 *              modified: new Date(2019, 2, 30)
 *          }]
 *      }
 *
 * An object literal of this form could also be used as the {@link #cfg!data} config option.
 */
@define({
    type: 'json'
})
class JsonStore extends Store {
    @config
    proxy = {
        type: AjaxProxy,

        reader: {
            type: JsonReader
        },

        writer: {
            type: JsonWriter
        }
    };
}

export { JsonStore };
