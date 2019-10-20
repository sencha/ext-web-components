import Ext_menu_Separator from './Ext/menu/Separator.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMenuseparator extends Ext_menu_Separator {
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
//        window.customElements.define('ext-menuseparator', ExtMenuseparator);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(ExtMenuseparator))
//export default reactify(ExtMenuseparator);