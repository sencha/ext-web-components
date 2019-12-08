//import Ext_ux_StatusBar from '@sencha/ext-runtime-base/dist/./Ext/ux/StatusBar.js';
import Ext_ux_StatusBar from './Ext/ux/StatusBar.js';
import ElementParser from './ElementParser.js';

export default class EWCStatusbar extends Ext_ux_StatusBar {
    constructor() {
        super ([], []);
        this.xtype = 'statusbar';
    }

}
window.customElements.define('ext-statusbar', ElementParser.withParsedCallback(EWCStatusbar));

