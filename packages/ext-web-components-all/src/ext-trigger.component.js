import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTrigger extends Ext_field_trigger_Trigger {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'trigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-trigger', ExtTrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(ExtTrigger))
//export default reactify(ExtTrigger);