import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCRadio extends Ext_form_Radio {
  constructor() {
    super ([], []);
    this.xtype = 'radio';
  }
}
try {
  window.customElements.define('ext-radio', ElementParser.withParsedCallback(EWCRadio));
}
catch(e) {
  window.customElements.define('ext-radio', EWCRadio);
}
