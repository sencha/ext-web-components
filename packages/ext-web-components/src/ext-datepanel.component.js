//import Ext_panel_Date from '@sencha/ext-runtime-base/dist/./Ext/panel/Date.js';
import Ext_panel_Date from './Ext/panel/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatepanel extends Ext_panel_Date {
    constructor() {
        super ([], []);
        this.xtype = 'datepanel';
    }

}
window.customElements.define('ext-datepanel', HTMLParsedElement.withParsedCallback(EWCDatepanel));

