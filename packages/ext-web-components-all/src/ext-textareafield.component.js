import Ext_form_TextArea from './Ext/form/TextArea.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTextareafield extends Ext_form_TextArea {
    constructor() {
        super ([],[])
        this.xtype = 'textareafield';
    }
}
window.customElements.define('ext-textareafield', HTMLParsedElement.withParsedCallback(ExtTextareafield))
