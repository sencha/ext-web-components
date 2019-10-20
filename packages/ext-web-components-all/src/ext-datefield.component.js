import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatefield extends Ext_field_DatePicker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datefield', ExtDatefield);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datefield', HTMLParsedElement.withParsedCallback(ExtDatefield))
//export default reactify(ExtDatefield);