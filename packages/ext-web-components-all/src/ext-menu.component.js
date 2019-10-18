import Ext_menu_Menu from './Ext/menu/Menu.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMenuComponent extends Ext_menu_Menu {
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
//        window.customElements.define('ext-menu', ExtMenuComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(ExtMenuComponent))
