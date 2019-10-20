import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMenucheckitem extends Ext_menu_CheckItem {
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
//        window.customElements.define('ext-menucheckitem', ExtMenucheckitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(ExtMenucheckitem))
//export default reactify(ExtMenucheckitem);