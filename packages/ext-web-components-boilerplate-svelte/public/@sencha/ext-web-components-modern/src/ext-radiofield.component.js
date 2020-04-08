import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './ElementParser.js';

export default class EWCRadiofield extends Ext_form_Radio {
  constructor() {
    super ([], []);
    this.xtype = 'radiofield';
  }
}
try {
  window.customElements.define('ext-radiofield', ElementParser.withParsedCallback(EWCRadiofield));
}
catch(e) {
  window.customElements.define('ext-radiofield', EWCRadiofield);
}
