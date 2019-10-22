import Ext_Tab from './Ext/Tab.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTab extends Ext_Tab {
    constructor() {
        super ([],[])
        this.xtype = 'tab';
    }
}
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(ExtTab))
