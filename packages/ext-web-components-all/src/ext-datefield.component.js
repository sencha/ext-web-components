import Ext_field_DatePicker from './Ext/field/DatePicker.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDatefieldComponent extends Ext_field_DatePicker {
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
//        window.customElements.define('ext-datefield', ExtDatefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datefield', HTMLParsedElement.withParsedCallback(ExtDatefieldComponent))
