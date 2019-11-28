//import Ext_form_Checkbox from '@sencha/ext-runtime-base/dist/./Ext/form/Checkbox.js';
import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCheckboxfield extends Ext_form_Checkbox {
    constructor() {
        super ([], []);
        this.xtype = 'checkboxfield';
    }

}
window.customElements.define('ext-checkboxfield', HTMLParsedElement.withParsedCallback(EWCCheckboxfield));

