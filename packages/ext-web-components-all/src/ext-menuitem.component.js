import Ext_menu_TextItem from './Ext/menu/TextItem.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMenuitemComponent extends Ext_menu_TextItem {
    constructor() {
        super (
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
