import Ext_DatePicker from './Ext/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatepicker extends Ext_DatePicker {
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
//        window.customElements.define('ext-datepicker', ExtDatepicker);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datepicker', HTMLParsedElement.withParsedCallback(ExtDatepicker))
//export default reactify(ExtDatepicker);