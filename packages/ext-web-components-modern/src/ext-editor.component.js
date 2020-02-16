import Ext_Editor from './Ext/Editor.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCEditor extends Ext_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'editor';
  }
}
try {
  window.customElements.define('ext-editor', ElementParser.withParsedCallback(EWCEditor));
}
catch(e) {
  window.customElements.define('ext-editor', EWCEditor);
}
