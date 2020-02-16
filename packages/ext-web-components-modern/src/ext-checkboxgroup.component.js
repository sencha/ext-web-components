import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCheckboxgroup extends Ext_field_CheckboxGroup {
  constructor() {
    super ([], []);
    this.xtype = 'checkboxgroup';
  }
}
try {
  window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
}
catch(e) {
  window.customElements.define('ext-checkboxgroup', EWCCheckboxgroup);
}
