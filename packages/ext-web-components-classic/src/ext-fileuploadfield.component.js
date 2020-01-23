import Ext_form_File from './Ext/form/File.js';
import ElementParser from './ElementParser.js';

export default class EWCFileuploadfield extends Ext_form_File {
  constructor() {
    super ([], []);
    this.xtype = 'fileuploadfield';
  }
}
try {
  window.customElements.define('ext-fileuploadfield', ElementParser.withParsedCallback(EWCFileuploadfield));
}
catch(e) {
  window.customElements.define('ext-fileuploadfield', EWCFileuploadfield);
}
