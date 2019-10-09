import Ext_form_Field from './Ext/form/Field'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFieldComponent extends Ext_form_Field {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'field'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-field', ExtFieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(ExtFieldComponent))
