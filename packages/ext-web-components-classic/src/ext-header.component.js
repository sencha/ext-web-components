//import Ext_panel_Header from '@sencha/ext-runtime-base/dist/./Ext/panel/Header.js';
import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './ElementParser.js';

export default class EWCHeader extends Ext_panel_Header {
    constructor() {
        super ([], []);
        this.xtype = 'header';
    }

}
window.customElements.define('ext-header', ElementParser.withParsedCallback(EWCHeader));

