import Ext_form_FormPanel from './Ext/form/FormPanel.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtFormpanelComponent extends Ext_form_FormPanel {
    constructor() {
        super (
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
