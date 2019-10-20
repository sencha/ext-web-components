import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtExpandtrigger extends Ext_field_trigger_Expand {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'expandtrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-expandtrigger', ExtExpandtrigger);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-expandtrigger', HTMLParsedElement.withParsedCallback(ExtExpandtrigger))
//export default reactify(ExtExpandtrigger);