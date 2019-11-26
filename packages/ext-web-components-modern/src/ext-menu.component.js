//import Ext_menu_Menu from '@sencha/ext-runtime-base/dist/./Ext/menu/Menu.js';
import Ext_menu_Menu from './Ext/menu/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMenu extends Ext_menu_Menu {
    constructor() {
        super ([], []);
        this.xtype = 'menu';
    }

}
window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(EWCMenu));

