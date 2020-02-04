import Ext_form_File from './Ext/form/File.js';
import ElementParser from './ElementParser.js';

export default class EWCFilefield extends Ext_form_File {
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
