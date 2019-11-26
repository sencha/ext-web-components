//import Ext_form_DatePickerNative from '@sencha/ext-runtime-base/dist/./Ext/form/DatePickerNative.js';
import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatepickernativefield extends Ext_form_DatePickerNative {
    constructor() {
        super ([], []);
        this.xtype = 'datepickernativefield';
    }

}
window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(EWCDatepickernativefield));

