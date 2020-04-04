import Ext_form_File from './Ext/form/File.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFileuploadfield extends Ext_form_File {
  constructor() {
    super ([], []);
    this.xtype = 'fileuploadfield';
  }
}
try {
  if (window.customElements.get('ext-fileuploadfield') == undefined) {
    window.customElements.define('ext-fileuploadfield', ElementParser.withParsedCallback(EWCFileuploadfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-fileuploadfield') == undefined) {
    window.customElements.define('ext-fileuploadfield', EWCFileuploadfield);
  }
}
