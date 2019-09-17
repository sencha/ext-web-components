import Ext_field_trigger_SpinUp_Component from './Ext/field/trigger/SpinUp'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSpinuptriggerComponent extends Ext_field_trigger_SpinUp_Component {
    constructor() {
        super (
            {},
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
