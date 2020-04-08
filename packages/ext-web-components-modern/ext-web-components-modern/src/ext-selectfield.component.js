import Ext_form_Select from './Ext/form/Select.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSelectfield extends Ext_form_Select {
  constructor() {
    super ([], []);
    this.xtype = 'selectfield';
  }
}
try {
  if (window.customElements.get('ext-selectfield') == undefined) {
    window.customElements.define('ext-selectfield', ElementParser.withParsedCallback(EWCSelectfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-selectfield') == undefined) {
    window.customElements.define('ext-selectfield', EWCSelectfield);
  }
}
