import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtComponent extends Ext_Gadget {
    constructor() {
        super ([],[])
        this.xtype = 'component';
    }
}
window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(ExtComponent))
