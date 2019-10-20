import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCleartrigger extends Ext_field_trigger_Clear {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'cleartrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-cleartrigger', ExtCleartrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-cleartrigger', HTMLParsedElement.withParsedCallback(ExtCleartrigger))
//export default reactify(ExtCleartrigger);