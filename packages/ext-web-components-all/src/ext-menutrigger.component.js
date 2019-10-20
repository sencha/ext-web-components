import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMenutrigger extends Ext_field_trigger_Menu {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'menutrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menutrigger', ExtMenutrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(ExtMenutrigger))
//export default reactify(ExtMenutrigger);