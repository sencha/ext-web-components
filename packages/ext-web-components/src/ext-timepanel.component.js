//import Ext_panel_Time from '@sencha/ext-runtime-base/dist/./Ext/panel/Time.js';
import Ext_panel_Time from './Ext/panel/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTimepanel extends Ext_panel_Time {
    constructor() {
        super ([], []);
        this.xtype = 'timepanel';
    }

}
window.customElements.define('ext-timepanel', HTMLParsedElement.withParsedCallback(EWCTimepanel));

