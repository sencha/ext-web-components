import Ext_menu_TextItem_Component from './Ext/menu/TextItem'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMenuitemComponent extends Ext_menu_TextItem_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'menuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuitem', ExtMenuitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(ExtMenuitemComponent))
