import Ext_field_trigger_Reveal_Component from './Ext/field/trigger/Reveal'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRevealtriggerComponent extends Ext_field_trigger_Reveal_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'revealtrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-revealtrigger', ExtRevealtriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-revealtrigger', HTMLParsedElement.withParsedCallback(ExtRevealtriggerComponent))
