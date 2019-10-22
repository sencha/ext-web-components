import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtWidget extends Ext_Gadget {
    constructor() {
        super ([],[])
        this.xtype = 'widget';
    }
}
window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(ExtWidget))
