import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDatefield extends Ext_field_DatePicker {
    constructor() {
        super ([],[])
        this.xtype = 'datefield';
    }
}
window.customElements.define('ext-datefield', HTMLParsedElement.withParsedCallback(ExtDatefield))
