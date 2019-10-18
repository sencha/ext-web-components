import Ext_DatePicker from './Ext/DatePicker.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDatepickerComponent extends Ext_DatePicker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datepicker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datepicker', ExtDatepickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(ExtDatepickerComponent))
