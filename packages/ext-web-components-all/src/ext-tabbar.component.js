import Ext_TabBar from './Ext/TabBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTabbar extends Ext_TabBar {
    constructor() {
        super ([],[])
        this.xtype = 'tabbar';
    }
}
window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(ExtTabbar))
