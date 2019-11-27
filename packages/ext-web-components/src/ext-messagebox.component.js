//import Ext_MessageBox from '@sencha/ext-runtime-base/dist/./Ext/MessageBox.js';
import Ext_MessageBox from './Ext/MessageBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMessagebox extends Ext_MessageBox {
    constructor() {
        super ([], []);
        this.xtype = 'messagebox';
    }

}
window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(EWCMessagebox));

