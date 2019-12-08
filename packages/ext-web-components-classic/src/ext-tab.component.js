//import Ext_tab_Tab from '@sencha/ext-runtime-base/dist/./Ext/tab/Tab.js';
import Ext_tab_Tab from './Ext/tab/Tab.js';
import ElementParser from './ElementParser.js';

export default class EWCTab extends Ext_tab_Tab {
    constructor() {
        super ([], []);
        this.xtype = 'tab';
    }

}
window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));

