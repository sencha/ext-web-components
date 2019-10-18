import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDatepickernativefieldComponent extends Ext_form_DatePickerNative {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datepickernativefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepickernativefield', ExtDatepickernativefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(ExtDatepickernativefieldComponent))
