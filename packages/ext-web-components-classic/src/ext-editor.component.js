import Ext_Editor from './Ext/Editor.js';
import ElementParser from './ElementParser.js';

export default class EWCEditor extends Ext_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'editor';
  }
}
window.customElements.define('ext-editor', ElementParser.withParsedCallback(EWCEditor));
