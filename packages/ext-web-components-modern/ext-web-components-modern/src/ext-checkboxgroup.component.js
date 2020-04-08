import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCheckboxgroup extends Ext_field_CheckboxGroup {
  constructor() {
    super ([], []);
    this.xtype = 'checkboxgroup';
  }
}
try {
  if (window.customElements.get('ext-checkboxgroup') == undefined) {
    window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
  }
}
catch(e) {
  if (window.customElements.get('ext-checkboxgroup') == undefined) {
    window.customElements.define('ext-checkboxgroup', EWCCheckboxgroup);
  }
}
