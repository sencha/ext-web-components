import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTextarea extends Ext_form_TextArea {
  constructor() {
    super ([], []);
    this.xtype = 'textarea';
  }
}
try {
  if (window.customElements.get('ext-textarea') == undefined) {
    window.customElements.define('ext-textarea', ElementParser.withParsedCallback(EWCTextarea));
  }
}
catch(e) {
  if (window.customElements.get('ext-textarea') == undefined) {
    window.customElements.define('ext-textarea', EWCTextarea);
  }
}
