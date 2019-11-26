//import Ext_field_CheckboxGroup from '@sencha/ext-runtime-base/dist/./Ext/field/CheckboxGroup.js';
import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCheckboxgroup extends Ext_field_CheckboxGroup {
    constructor() {
        super ([], []);
        this.xtype = 'checkboxgroup';
    }

}
window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(EWCCheckboxgroup));

