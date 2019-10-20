import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMenuradioitem extends Ext_menu_RadioItem {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'menuradioitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuradioitem', ExtMenuradioitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menuradioitem', HTMLParsedElement.withParsedCallback(ExtMenuradioitem))
//export default reactify(ExtMenuradioitem);