import Ext_form_field_ComboBox_Component from './Ext/form/field/ComboBox'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtComboboxfieldComponent extends Ext_form_field_ComboBox_Component {
    constructor() {
        super ()
        this.xtype = 'comboboxfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-comboboxfield', ExtComboboxfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-comboboxfield', HTMLParsedElement.withParsedCallback(ExtComboboxfieldComponent))
