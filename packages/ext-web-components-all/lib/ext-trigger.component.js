import Ext_field_trigger_Trigger_Component from './Ext/field/trigger/Trigger'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTriggerComponent extends Ext_field_trigger_Trigger_Component {
    constructor() {
        super ()
        this.xtype = 'trigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-trigger', ExtTriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(ExtTriggerComponent))