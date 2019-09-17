import Ext_menu_Separator_Component from './Ext/menu/Separator'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMenuseparatorComponent extends Ext_menu_Separator_Component {
    constructor() {
        super (
            {},
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
