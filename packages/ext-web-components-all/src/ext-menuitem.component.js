import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMenuitem extends Ext_menu_TextItem {
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
//        window.customElements.define('ext-menuitem', ExtMenuitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(ExtMenuitem))
//export default reactify(ExtMenuitem);