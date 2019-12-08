//import Ext_Panel from '@sencha/ext-runtime-base/dist/./Ext/Panel.js';
import Ext_Panel from './Ext/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCPanel extends Ext_Panel {
    constructor() {
        super ([], []);
        this.xtype = 'panel';
    }

}
window.customElements.define('ext-panel', ElementParser.withParsedCallback(EWCPanel));

