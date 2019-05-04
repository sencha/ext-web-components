import { Base, config, define } from '../../../extjs-core/src';

import { Identifier } from './Identifier';

/**
 * This class generates UUID's according to RFC 4122. This class has a default id property.
 * This means that a single instance is shared unless the id property is overridden. Thus,
 * two {@link Model} instances configured like the following share one generator:
 *
 *      @define
 *      class MyModelX extends Model {
 *          @config
 *          static identifier = 'uuid';
 *          
 *          //...
 *      }
 *
 *      @define
 *      class MyModelY extends Model {
 *          @config
 *          static identifier = 'uuid';
 *          
 *          //...
 *      }
 *
 * This allows all models using this class to share a commonly configured instance.
 * 
 * NOTE: This generator only supports v4 (random) UUID's.
 */
@define({
    type: 'uuid',
    
    tags: [
        /**
         * @property {Boolean} isUnique
         * Provides a way to determine if this identifier supports creating unique IDs.
         * Proxies like {@link LocalStorageProxy} need the identifier to create
         * unique IDs and will check this property.
         * @private
         * @readonly
         */
        'isUnique'
    ]
})
class UuidIdentifier extends Identifier {
    /**
     * @cfg {String} prefix
     * The string to place in front of the sequential number for each generated id.
     */
    @config
    prefix = null;

    ctor () {
        let me = this;
        // our arrays are fixed-size:
        let hb = new Array(256);
        let parts = new Array(21);
        let i;

        parts[0] = '';
        parts[5] = parts[8] = parts[11] = parts[14] = '-';
        
        for (i = 0; i < 256; ++i) {
            hb[i] = ((i < 16) ? '0' : '') + i.toString(16);  // 00-ff
        }
        
        me._hexBytes = hb;
        me._parts = parts;
        me._randBuf = [];
    }
    
    generate () {
        let me = this;
        let hexBytes = me._hexBytes;
        let rand = me._randomize();  // 16 bytes of randomness
        let parts = me._parts;

        /*
           The magic decoder ring (derived from RFC 4122 Section 4.2.2):

           +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
           |                          time_low                             |
           +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
           |           time_mid            |  ver  |        time_hi        |
           +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
           |res|  clock_hi |   clock_low   |    salt 0   |M|     salt 1    |
           +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
           |                         salt (2-5)                            |
           +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

                     time_mid      clock_hi (low 6 bits)
            time_low     | time_hi |clock_lo
                |        |     |   || salt[0]
                |        |     |   ||   | salt[1..5]
                v        v     v   vv   v v
                0badf00d-aced-1def-b123-dfad0badbeef
                              ^    ^     ^
                        version    |     multicast (low bit)
                                   |
                                reserved (upper 2 bits)
        */

        // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
        rand[6] = (rand[6] & 0x0f) | 0x40;
        rand[8] = (rand[8] & 0x3f) | 0x80;

        parts[1] = hexBytes[rand[0]];
        parts[2] = hexBytes[rand[1]];
        parts[3] = hexBytes[rand[2]];
        parts[4] = hexBytes[rand[3]];
        // parts[5] = '-';
        parts[6] = hexBytes[rand[4]];
        parts[7] = hexBytes[rand[5]];
        // parts[8] = '-';
        parts[9] = hexBytes[rand[6]];
        parts[10] = hexBytes[rand[7]];
        // parts[11] = '-';
        parts[12] = hexBytes[rand[8]];
        parts[13] = hexBytes[rand[9]];
        // parts[14] = '-';
        parts[15] = hexBytes[rand[10]];
        parts[16] = hexBytes[rand[11]];
        parts[17] = hexBytes[rand[12]];
        parts[18] = hexBytes[rand[13]];
        parts[19] = hexBytes[rand[14]];
        parts[20] = hexBytes[rand[15]];
        
        return parts.join('');
    }
    
    updatePrefix (value) {
        this._parts[0] = value || '';
    }

    _randomize () {
        let buf = this._randBuf;
        let i, r;

        for (i = 0; i < 16; ++i) {
            if (!(i & 0x03)) {
                r = Math.random() * 0x100000000;
            }

            buf[i] = r >>> ((i & 0x03) << 3) & 0xFF;
        }
        
        return buf;
    }
}

UuidIdentifier.instance = new UuidIdentifier();
UuidIdentifier.instance.cacheable = true;

Base.Factory.on('identifier', (factory, config) => {
    if (config === 'uuid') {
        return UuidIdentifier.instance;
    }

    // by falling off w/undefined return the next factory will run...
});

export { UuidIdentifier };
