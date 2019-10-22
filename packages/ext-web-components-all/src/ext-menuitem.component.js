import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMenuitem extends Ext_menu_TextItem {
    constructor() {
        super ([],[])
        this.xtype = 'menuitem';
    }
}
window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(ExtMenuitem))
