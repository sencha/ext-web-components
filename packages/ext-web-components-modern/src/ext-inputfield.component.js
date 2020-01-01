import Ext_field_Input from './Ext/field/Input.js';
import ElementParser from './ElementParser.js';

export default class EWCInputfield extends Ext_field_Input {
  constructor() {
    super ([], []);
    this.xtype = 'inputfield';
  }
}
window.customElements.define('ext-inputfield', ElementParser.withParsedCallback(EWCInputfield));
