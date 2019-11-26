//import Ext_TabBar from '@sencha/ext-runtime-base/dist/./Ext/TabBar.js';
import Ext_TabBar from './Ext/TabBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTabbar extends Ext_TabBar {
    constructor() {
        super ([], []);
        this.xtype = 'tabbar';
    }

}
window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(EWCTabbar));

