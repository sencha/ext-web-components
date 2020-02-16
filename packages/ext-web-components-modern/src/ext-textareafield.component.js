import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTextareafield extends Ext_form_TextArea {
  constructor() {
    super ([], []);
    this.xtype = 'textareafield';
  }
}
try {
  window.customElements.define('ext-textareafield', ElementParser.withParsedCallback(EWCTextareafield));
}
catch(e) {
  window.customElements.define('ext-textareafield', EWCTextareafield);
}
