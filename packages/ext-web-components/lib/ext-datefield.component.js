import Ext_field_DatePicker_Component from './Ext/field/DatePicker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtDatefieldComponent extends Ext_field_DatePicker_Component {
    constructor() {
        super (
            {},
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
