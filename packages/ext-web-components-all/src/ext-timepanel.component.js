import Ext_panel_Time from './Ext/panel/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTimepanel extends Ext_panel_Time {
    constructor() {
        super ([],[])
        this.xtype = 'timepanel';
    }
}
window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(ExtTimepanel))
