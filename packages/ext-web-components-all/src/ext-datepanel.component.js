import Ext_panel_Date from './Ext/panel/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDatepanel extends Ext_panel_Date {
    constructor() {
        super ([],[])
        this.xtype = 'datepanel';
    }
}
window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(ExtDatepanel))
