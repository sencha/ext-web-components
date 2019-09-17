import Ext_menu_CheckItem_Component from './Ext/menu/CheckItem'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMenucheckitemComponent extends Ext_menu_CheckItem_Component {
    constructor() {
        super ()
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
