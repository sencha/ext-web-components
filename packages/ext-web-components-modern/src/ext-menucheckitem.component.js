//import Ext_menu_CheckItem from '@sencha/ext-runtime-base/dist/./Ext/menu/CheckItem.js';
import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMenucheckitem extends Ext_menu_CheckItem {
    constructor() {
        super ([], []);
        this.xtype = 'menucheckitem';
    }

}
window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(EWCMenucheckitem));

