import Ext_field_trigger_Expand from './Ext/field/trigger/Expand'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtExpandtriggerComponent extends Ext_field_trigger_Expand {
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
//        window.customElements.define('ext-expandtrigger', ExtExpandtriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-expandtrigger', HTMLParsedElement.withParsedCallback(ExtExpandtriggerComponent))
