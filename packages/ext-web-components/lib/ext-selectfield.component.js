import Ext_form_Select_Component from './Ext/form/Select'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSelectfieldComponent extends Ext_form_Select_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'selectfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectfield', ExtSelectfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfieldComponent))
