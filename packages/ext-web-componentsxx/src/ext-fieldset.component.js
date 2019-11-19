import Ext_form_FieldSet from './Ext/form/FieldSet'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtFieldsetComponent extends Ext_form_FieldSet {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'fieldset'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldset', ExtFieldsetComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-fieldset', HTMLParsedElement.withParsedCallback(ExtFieldsetComponent))
