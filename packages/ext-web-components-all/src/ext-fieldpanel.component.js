import Ext_field_Panel from './Ext/field/Panel.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtFieldpanelComponent extends Ext_field_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'fieldpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldpanel', ExtFieldpanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-fieldpanel', HTMLParsedElement.withParsedCallback(ExtFieldpanelComponent))
