import Ext_form_File from './Ext/form/File.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFilefield extends Ext_form_File {
  constructor() {
    super ([], []);
    this.xtype = 'filefield';
  }
}
try {
  if (window.customElements.get('ext-filefield') == undefined) {
    window.customElements.define('ext-filefield', ElementParser.withParsedCallback(EWCFilefield));
  }
}
catch(e) {
  if (window.customElements.get('ext-filefield') == undefined) {
    window.customElements.define('ext-filefield', EWCFilefield);
  }
}
