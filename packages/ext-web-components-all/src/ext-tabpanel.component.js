import Ext_TabPanel from './Ext/TabPanel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTabpanel extends Ext_TabPanel {
    constructor() {
        super ([],[])
        this.xtype = 'tabpanel';
    }
}
window.customElements.define('ext-tabpanel', HTMLParsedElement.withParsedCallback(ExtTabpanel))
