import Ext_menu_Menu from './Ext/menu/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMenu extends Ext_menu_Menu {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'menu'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menu', ExtMenu);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(ExtMenu))
//export default reactify(ExtMenu);