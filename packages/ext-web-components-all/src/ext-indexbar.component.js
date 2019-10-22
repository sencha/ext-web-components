import Ext_IndexBar from './Ext/IndexBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtIndexbar extends Ext_IndexBar {
    constructor() {
        super ([],[])
        this.xtype = 'indexbar';
    }
}
window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbar))
