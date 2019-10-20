import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatepickernativefield extends Ext_form_DatePickerNative {
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
//        window.customElements.define('ext-datepickernativefield', ExtDatepickernativefield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepickernativefield', HTMLParsedElement.withParsedCallback(ExtDatepickernativefield))
//export default reactify(ExtDatepickernativefield);