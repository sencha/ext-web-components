import Ext_form_field_Tag from './Ext/form/field/Tag.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTagfield extends Ext_form_field_Tag {
  constructor() {
    super ([], []);
    this.xtype = 'tagfield';
  }
}
try {
  if (window.customElements.get('ext-tagfield') == undefined) {
    window.customElements.define('ext-tagfield', ElementParser.withParsedCallback(EWCTagfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-tagfield') == undefined) {
    window.customElements.define('ext-tagfield', EWCTagfield);
  }
}
