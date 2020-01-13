import Ext_form_field_Tag from './Ext/form/field/Tag.js';
import ElementParser from './ElementParser.js';

export default class EWCTagfield extends Ext_form_field_Tag {
  constructor() {
    super ([], []);
    this.xtype = 'tagfield';
  }
}
window.customElements.define('ext-tagfield', ElementParser.withParsedCallback(EWCTagfield));
