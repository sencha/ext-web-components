import Ext_form_Email from './Ext/form/Email.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtEmailfield extends Ext_form_Email {
    constructor() {
        super ([],[])
        this.xtype = 'emailfield';
    }
}
window.customElements.define('ext-emailfield', HTMLParsedElement.withParsedCallback(ExtEmailfield))
