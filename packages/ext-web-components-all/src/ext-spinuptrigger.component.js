import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSpinuptriggerComponent extends Ext_field_trigger_SpinUp {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spinuptrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinuptrigger', ExtSpinuptriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(ExtSpinuptriggerComponent))
