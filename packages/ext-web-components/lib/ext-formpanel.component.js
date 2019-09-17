import Ext_form_FormPanel_Component from './Ext/form/FormPanel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFormpanelComponent extends Ext_form_FormPanel_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'formpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-formpanel', ExtFormpanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-formpanel', HTMLParsedElement.withParsedCallback(ExtFormpanelComponent))
