import Ext_form_CheckboxGroup from './Ext/form/CheckboxGroup.js';
import ElementParser from './ElementParser.js';

export default class EWCCheckboxgroup extends Ext_form_CheckboxGroup {
  constructor() {
    super ([], []);
    this.xtype = 'checkboxgroup';
  }
}
window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
