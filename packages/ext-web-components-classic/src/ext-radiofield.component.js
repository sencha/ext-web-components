import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRadiofield extends Ext_form_Radio {
  constructor() {
    super ([], []);
    this.xtype = 'radiofield';
  }
}
try {
  if (window.customElements.get('ext-radiofield') == undefined) {
    window.customElements.define('ext-radiofield', ElementParser.withParsedCallback(EWCRadiofield));
  }
}
catch(e) {
  if (window.customElements.get('ext-radiofield') == undefined) {
    window.customElements.define('ext-radiofield', EWCRadiofield);
  }
}
