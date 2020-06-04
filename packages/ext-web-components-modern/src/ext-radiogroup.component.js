import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRadiogroup extends Ext_field_RadioGroup {
  constructor() {
    super ([], []);
    this.xtype = 'radiogroup';
  }
}
try {
  if (window.customElements.get('ext-radiogroup') == undefined) {
    window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
  }
}
catch(e) {
  if (window.customElements.get('ext-radiogroup') == undefined) {
    window.customElements.define('ext-radiogroup', EWCRadiogroup);
  }
}
