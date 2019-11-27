//import Ext_menu_RadioItem from '@sencha/ext-runtime-base/dist/./Ext/menu/RadioItem.js';
import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCMenuradioitem extends Ext_menu_RadioItem {
    constructor() {
        super ([], []);
        this.xtype = 'menuradioitem';
    }

}
window.customElements.define('ext-menuradioitem', HTMLParsedElement.withParsedCallback(EWCMenuradioitem));

