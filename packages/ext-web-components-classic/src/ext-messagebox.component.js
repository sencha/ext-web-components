//import Ext_window_MessageBox from '@sencha/ext-runtime-base/dist/./Ext/window/MessageBox.js';
import Ext_window_MessageBox from './Ext/window/MessageBox.js';
import ElementParser from './ElementParser.js';

export default class EWCMessagebox extends Ext_window_MessageBox {
    constructor() {
        super ([], []);
        this.xtype = 'messagebox';
    }

}
window.customElements.define('ext-messagebox', ElementParser.withParsedCallback(EWCMessagebox));

