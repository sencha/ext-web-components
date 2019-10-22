import Ext_form_Select from './Ext/form/Select.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSelectfield extends Ext_form_Select {
    constructor() {
        super ([],[])
        this.xtype = 'selectfield';
    }
}
window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfield))
