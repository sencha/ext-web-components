import Ext_menu_Separator from './Ext/menu/Separator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMenuseparator extends Ext_menu_Separator {
    constructor() {
        super ([],[])
        this.xtype = 'menuseparator';
    }
}
window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(ExtMenuseparator))
