import Ext_form_Display_Component from './Ext/form/Display'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDisplayfieldComponent extends Ext_form_Display_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'displayfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-displayfield', ExtDisplayfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-displayfield', HTMLParsedElement.withParsedCallback(ExtDisplayfieldComponent))
