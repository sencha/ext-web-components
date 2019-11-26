//import Ext_menu_TextItem from '@sencha/ext-runtime-base/dist/./Ext/menu/TextItem.js';
import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMenuitem extends Ext_menu_TextItem {
    constructor() {
        super ([], []);
        this.xtype = 'menuitem';
    }

}
window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(EWCMenuitem));

