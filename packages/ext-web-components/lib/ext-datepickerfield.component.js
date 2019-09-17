import Ext_field_DatePicker_Component from './Ext/field/DatePicker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatepickerfieldComponent extends Ext_field_DatePicker_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'datepickerfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepickerfield', ExtDatepickerfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepickerfield', HTMLParsedElement.withParsedCallback(ExtDatepickerfieldComponent))
