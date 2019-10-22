import Ext_LoadMask from './Ext/LoadMask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtLoadmask extends Ext_LoadMask {
    constructor() {
        super ([],[])
        this.xtype = 'loadmask';
    }
}
window.customElements.define('ext-loadmask', HTMLParsedElement.withParsedCallback(ExtLoadmask))
