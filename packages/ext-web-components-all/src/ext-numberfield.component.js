import Ext_form_Number from './Ext/form/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtNumberfield extends Ext_form_Number {
    constructor() {
        super ([],[])
        this.xtype = 'numberfield';
    }
}
window.customElements.define('ext-numberfield', HTMLParsedElement.withParsedCallback(ExtNumberfield))
