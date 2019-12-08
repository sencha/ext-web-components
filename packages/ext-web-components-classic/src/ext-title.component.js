//import Ext_panel_Title from '@sencha/ext-runtime-base/dist/./Ext/panel/Title.js';
import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './ElementParser.js';

export default class EWCTitle extends Ext_panel_Title {
    constructor() {
        super ([], []);
        this.xtype = 'title';
    }

}
window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));

