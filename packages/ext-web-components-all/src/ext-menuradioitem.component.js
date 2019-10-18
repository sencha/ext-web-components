import Ext_menu_RadioItem from './Ext/menu/RadioItem.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMenuradioitemComponent extends Ext_menu_RadioItem {
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
//        window.customElements.define('ext-menuradioitem', ExtMenuradioitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menuradioitem', HTMLParsedElement.withParsedCallback(ExtMenuradioitemComponent))
