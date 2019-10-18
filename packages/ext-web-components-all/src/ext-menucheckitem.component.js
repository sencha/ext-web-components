import Ext_menu_CheckItem from './Ext/menu/CheckItem.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMenucheckitemComponent extends Ext_menu_CheckItem {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'menucheckitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menucheckitem', ExtMenucheckitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(ExtMenucheckitemComponent))
