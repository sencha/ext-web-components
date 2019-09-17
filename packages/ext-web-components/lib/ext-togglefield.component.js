import Ext_form_Toggle_Component from './Ext/form/Toggle'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTogglefieldComponent extends Ext_form_Toggle_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'togglefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-togglefield', ExtTogglefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-togglefield', HTMLParsedElement.withParsedCallback(ExtTogglefieldComponent))
