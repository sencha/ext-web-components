//import Ext_panel_DateTitle from '@sencha/ext-runtime-base/dist/./Ext/panel/DateTitle.js';
import Ext_panel_DateTitle from './Ext/panel/DateTitle.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatetitle extends Ext_panel_DateTitle {
    constructor() {
        super ([], []);
        this.xtype = 'datetitle';
    }

}
window.customElements.define('ext-datetitle', HTMLParsedElement.withParsedCallback(EWCDatetitle));

