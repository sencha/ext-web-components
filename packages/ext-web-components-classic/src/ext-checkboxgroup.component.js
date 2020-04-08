import Ext_form_CheckboxGroup from './Ext/form/CheckboxGroup.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCheckboxgroup extends Ext_form_CheckboxGroup {
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
