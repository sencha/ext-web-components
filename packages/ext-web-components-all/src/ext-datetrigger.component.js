import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatetrigger extends Ext_field_trigger_Date {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datetrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datetrigger', ExtDatetrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datetrigger', HTMLParsedElement.withParsedCallback(ExtDatetrigger))
//export default reactify(ExtDatetrigger);