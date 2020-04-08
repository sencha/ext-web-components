import Ext_field_Input from './Ext/field/Input.js';
import ElementParser from './common/ElementParser.js';

export default class EWCInputfield extends Ext_field_Input {
  constructor() {
    super ([], []);
    this.xtype = 'inputfield';
  }
}
try {
  if (window.customElements.get('ext-inputfield') == undefined) {
    window.customElements.define('ext-inputfield', ElementParser.withParsedCallback(EWCInputfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-inputfield') == undefined) {
    window.customElements.define('ext-inputfield', EWCInputfield);
  }
}
