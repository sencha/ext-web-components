import Ext_froala_EditorField from './Ext/froala/EditorField.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFroalaeditorfield extends Ext_froala_EditorField {
  constructor() {
    super ([], []);
    this.xtype = 'froalaeditorfield';
  }
}
try {
  if (window.customElements.get('ext-froalaeditorfield') == undefined) {
    window.customElements.define('ext-froalaeditorfield', ElementParser.withParsedCallback(EWCFroalaeditorfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-froalaeditorfield') == undefined) {
    window.customElements.define('ext-froalaeditorfield', EWCFroalaeditorfield);
  }
}
