import Ext_form_field_Tag from './Ext/form/field/Tag.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTagfield extends Ext_form_field_Tag {
  constructor() {
    super ([], []);
    this.xtype = 'tagfield';
  }
}
try {
  window.customElements.define('ext-tagfield', ElementParser.withParsedCallback(EWCTagfield));
}
catch(e) {
  window.customElements.define('ext-tagfield', EWCTagfield);
}
