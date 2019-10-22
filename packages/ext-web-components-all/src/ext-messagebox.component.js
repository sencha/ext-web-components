import Ext_MessageBox from './Ext/MessageBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMessagebox extends Ext_MessageBox {
    constructor() {
        super ([],[])
        this.xtype = 'messagebox';
    }
}
window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(ExtMessagebox))
