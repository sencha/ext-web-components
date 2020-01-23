import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import ElementParser from './ElementParser.js';

export default class EWCRadiogroup extends Ext_field_RadioGroup {
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
