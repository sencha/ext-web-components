import Ext_form_Toggle from './Ext/form/Toggle.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTogglefield extends Ext_form_Toggle {
    constructor() {
        super ([],[])
        this.xtype = 'togglefield';
    }
}
window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(ExtTogglefield))
