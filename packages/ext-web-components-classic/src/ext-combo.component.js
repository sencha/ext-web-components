//import Ext_form_ComboBox from '@sencha/ext-runtime-base/dist/./Ext/form/ComboBox.js';
import Ext_form_ComboBox from './Ext/form/ComboBox.js';
import ElementParser from './ElementParser.js';

export default class EWCCombo extends Ext_form_ComboBox {
    constructor() {
        super ([], []);
        this.xtype = 'combo';
    }

}
window.customElements.define('ext-combo', ElementParser.withParsedCallback(EWCCombo));

