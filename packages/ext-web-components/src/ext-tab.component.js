//import Ext_Tab from '@sencha/ext-runtime-base/dist/./Ext/Tab.js';
import Ext_Tab from './Ext/Tab.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTab extends Ext_Tab {
    constructor() {
        super ([], []);
        this.xtype = 'tab';
    }

}
window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(EWCTab));

