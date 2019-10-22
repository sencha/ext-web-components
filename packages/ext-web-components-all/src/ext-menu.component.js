import Ext_menu_Menu from './Ext/menu/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtMenu extends Ext_menu_Menu {
    constructor() {
        super ([],[])
        this.xtype = 'menu';
    }
}
window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(ExtMenu))
