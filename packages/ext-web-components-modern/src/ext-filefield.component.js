import Ext_field_File from './Ext/field/File.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCFilefield extends Ext_field_File {
  constructor() {
    super ([], []);
    this.xtype = 'filefield';
  }
}
try {
  window.customElements.define('ext-filefield', ElementParser.withParsedCallback(EWCFilefield));
}
catch(e) {
  window.customElements.define('ext-filefield', EWCFilefield);
}
