import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './ElementParser.js';

export default class EWCTextarea extends Ext_form_TextArea {
  constructor() {
    super ([], []);
    this.xtype = 'textarea';
  }
}
try {
  window.customElements.define('ext-textarea', ElementParser.withParsedCallback(EWCTextarea));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-textarea', EWCTextarea);
}
