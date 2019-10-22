import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCheckboxgroup extends Ext_field_CheckboxGroup {
    constructor() {
        super ([],[])
        this.xtype = 'checkboxgroup';
    }
}
window.customElements.define('ext-checkboxgroup', HTMLParsedElement.withParsedCallback(ExtCheckboxgroup))
