import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtFormpanel extends Ext_form_FormPanel {
    constructor() {
        super ([],[])
        this.xtype = 'formpanel';
    }
}
window.customElements.define('ext-formpanel', HTMLParsedElement.withParsedCallback(ExtFormpanel))
