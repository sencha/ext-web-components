import Ext_DatePicker from './Ext/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDatepicker extends Ext_DatePicker {
    constructor() {
        super ([],[])
        this.xtype = 'datepicker';
    }
}
window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(ExtDatepicker))
