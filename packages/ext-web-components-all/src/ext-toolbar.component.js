import Ext_Toolbar from './Ext/Toolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtToolbar extends Ext_Toolbar {
    constructor() {
        super ([],[])
        this.xtype = 'toolbar';
    }
}
window.customElements.define('ext-toolbar', HTMLParsedElement.withParsedCallback(ExtToolbar))
