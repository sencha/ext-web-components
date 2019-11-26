//import Ext_form_field_ComboBox from '@sencha/ext-runtime-base/dist/./Ext/form/field/ComboBox.js';
import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCombobox extends Ext_form_field_ComboBox {
    constructor() {
        super ([], []);
        this.xtype = 'combobox';
    }

}
window.customElements.define('ext-combobox', HTMLParsedElement.withParsedCallback(EWCCombobox));

