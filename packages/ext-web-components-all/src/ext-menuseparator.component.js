import Ext_menu_Separator from './Ext/menu/Separator.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMenuseparatorComponent extends Ext_menu_Separator {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'menuseparator'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuseparator', ExtMenuseparatorComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(ExtMenuseparatorComponent))
