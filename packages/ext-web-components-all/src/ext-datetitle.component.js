import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDatetitle extends Ext_panel_DateTitle {
    constructor() {
        super ([],[])
        this.xtype = 'datetitle';
    }
}
window.customElements.define('ext-datetitle', HTMLParsedElement.withParsedCallback(ExtDatetitle))
