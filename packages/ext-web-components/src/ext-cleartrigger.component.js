import Ext_field_trigger_Clear from './Ext/field/trigger/Clear'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCleartriggerComponent extends Ext_field_trigger_Clear {
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
//        window.customElements.define('ext-cleartrigger', ExtCleartriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-cleartrigger', HTMLParsedElement.withParsedCallback(ExtCleartriggerComponent))
