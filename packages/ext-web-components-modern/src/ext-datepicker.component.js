//import Ext_DatePicker from '@sencha/ext-runtime-base/dist/./Ext/DatePicker.js';
import Ext_DatePicker from './Ext/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatepicker extends Ext_DatePicker {
    constructor() {
        super ([], []);
        this.xtype = 'datepicker';
    }

}
window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(EWCDatepicker));

