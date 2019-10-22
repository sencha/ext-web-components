import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtFieldset extends Ext_form_FieldSet {
    constructor() {
        super ([],[])
        this.xtype = 'fieldset';
    }
}
window.customElements.define('ext-fieldset', HTMLParsedElement.withParsedCallback(ExtFieldset))
