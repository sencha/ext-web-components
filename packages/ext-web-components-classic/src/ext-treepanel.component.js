//import Ext_TreePanel from '@sencha/ext-runtime-base/dist/./Ext/TreePanel.js';
import Ext_TreePanel from './Ext/TreePanel.js';
import ElementParser from './ElementParser.js';

export default class EWCTreepanel extends Ext_TreePanel {
    constructor() {
        super ([], []);
        this.xtype = 'treepanel';
    }

}
window.customElements.define('ext-treepanel', ElementParser.withParsedCallback(EWCTreepanel));

