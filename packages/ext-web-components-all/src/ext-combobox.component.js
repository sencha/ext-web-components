import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCombobox extends Ext_form_field_ComboBox {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'combobox'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-combobox', ExtCombobox);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-combobox', HTMLParsedElement.withParsedCallback(ExtCombobox))
//export default reactify(ExtCombobox);