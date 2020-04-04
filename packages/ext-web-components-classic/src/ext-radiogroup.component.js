import Ext_form_RadioGroup from './Ext/form/RadioGroup.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRadiogroup extends Ext_form_RadioGroup {
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
