//import Ext_menu_Separator from '@sencha/ext-runtime-base/dist/./Ext/menu/Separator.js';
import Ext_menu_Separator from './Ext/menu/Separator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMenuseparator extends Ext_menu_Separator {
    constructor() {
        super ([], []);
        this.xtype = 'menuseparator';
    }

}
window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(EWCMenuseparator));

