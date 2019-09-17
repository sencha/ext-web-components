import Ext_form_DatePickerNative_Component from './Ext/form/DatePickerNative'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatepickernativefieldComponent extends Ext_form_DatePickerNative_Component {
    constructor() {
        super (
            {},
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
