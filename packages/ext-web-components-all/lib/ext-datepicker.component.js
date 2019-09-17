import Ext_DatePicker_Component from './Ext/DatePicker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatepickerComponent extends Ext_DatePicker_Component {
    constructor() {
        super ()
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
