import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCheckbox extends Ext_form_Checkbox {
    constructor() {
        super ([],[])
        this.xtype = 'checkbox';
    }
}
window.customElements.define('ext-checkbox', HTMLParsedElement.withParsedCallback(ExtCheckbox))
