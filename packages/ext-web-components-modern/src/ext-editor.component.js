import Ext_Editor from './Ext/Editor.js';
import ElementParser from './common/ElementParser.js';

export default class EWCEditor extends Ext_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'editor';
  }
}
try {
  if (window.customElements.get('ext-editor') == undefined) {
    window.customElements.define('ext-editor', ElementParser.withParsedCallback(EWCEditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-editor') == undefined) {
    window.customElements.define('ext-editor', EWCEditor);
  }
}
