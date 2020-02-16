import Ext_form_Select from './Ext/form/Select.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSelectfield extends Ext_form_Select {
  constructor() {
    super ([], []);
    this.xtype = 'selectfield';
  }
}
try {
  window.customElements.define('ext-selectfield', ElementParser.withParsedCallback(EWCSelectfield));
}
catch(e) {
  window.customElements.define('ext-selectfield', EWCSelectfield);
}
