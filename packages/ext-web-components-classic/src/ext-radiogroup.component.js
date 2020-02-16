import Ext_form_RadioGroup from './Ext/form/RadioGroup.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCRadiogroup extends Ext_form_RadioGroup {
  constructor() {
    super ([], []);
    this.xtype = 'radiogroup';
  }
}
try {
  window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
}
catch(e) {
  window.customElements.define('ext-radiogroup', EWCRadiogroup);
}
