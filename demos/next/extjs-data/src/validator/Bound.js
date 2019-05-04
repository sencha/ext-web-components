import { config, define, format } from '../../../extjs-core/src';

import { Validator } from './Validator';

/**
 * @abstract
 * A superclass for a validator that checks if a value is within a certain range.
 */
@define({
    type: 'bound',
    
    prototype: {
        _bothMsg: null,
        _minMsg: null,
        _maxMsg: null
    }
})
class BoundValidator extends Validator {
    /**
     * @cfg {Number} min
     * The minimum value.
     */
    @config
    min = null;

    /**
     * @cfg {Number} max
     * The maximum value.
     */
    @config
    max = null;

    /**
     * @cfg {String} emptyMessage
     * The error message to return when the value is empty.
     * @locale
     */
    @config
    emptyMessage = 'Must be present';

    /**
     * @cfg {String} minOnlyMessage
     * The error message to return when the value is less than the minimum
     * and only a minimum is specified.
     * @locale
     */
    @config
    minOnlyMessage = 'Value must be greater than {0}';

    /**
     * @cfg {String} maxOnlyMessage
     * The error message to return when the value is more than the maximum
     * and only a maximum is specified.
     * @locale
     */
    @config
    maxOnlyMessage = 'Value must be less than {0}';

    /**
     * @cfg {String} bothMessage
     * The error message to return when the value is not in the specified range
     * and both the minimum and maximum are specified.
     * @locale
     */
    @config
    bothMessage = 'Value must be between {0} and {1}';

    resetMessages () {
        this._bothMsg = this._minMsg = this._maxMsg = null;
    }

    updateMin () {
        this.resetMessages();
    }

    updateMax () {
        this.resetMessages();
    }

    updateMinOnlyMessage () {
        this.resetMessages();
    }

    updateMaxOnlyMessage () {
        this.resetMessages();
    }

    updateBothMessage () {
        this.resetMessages();
    }

    validate (value) {
        let me = this;
        let min = me.min;
        let max = me.max;
        let hasMin = (min != null);
        let hasMax = (max != null);
        let msg = me.validateValue(value);

        if (msg === true) {
            value = me.getValue(value);
    
            if (hasMin && hasMax) {
                if (value < min || value > max) {
                    msg = me._bothMsg || (me._bothMsg = format(me.bothMessage, min, max));
                }
            }
            else if (hasMin) {
                if (value < min) {
                    msg = me._minMsg || (me._minMsg = format(me.minOnlyMessage, min));
                }
            }
            else if (hasMax) {
                if (value > max) {
                    msg = me._maxMsg || (me._maxMsg = format(me.maxOnlyMessage, max));
                }
            }
        }

        return msg;
    }

    validateValue (value) {
        return (value == null) ? this.emptyMessage : true;
    }

    getValue (v) {
        return v;
    }
}

export { BoundValidator };
