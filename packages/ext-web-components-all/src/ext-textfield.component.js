import Ext_form_Text from './Ext/form/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTextfield extends Ext_form_Text {
    constructor() {
        super ([],[])
        this.xtype = 'textfield';
    }
}
window.customElements.define('ext-textfield', HTMLParsedElement.withParsedCallback(ExtTextfield))
