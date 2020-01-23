import Ext_froala_Editor from './Ext/froala/Editor.js';
import ElementParser from './ElementParser.js';

export default class EWCFroalaeditor extends Ext_froala_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'froalaeditor';
  }
}
try {
  window.customElements.define('ext-froalaeditor', ElementParser.withParsedCallback(EWCFroalaeditor));
}
catch(e) {
  window.customElements.define('ext-froalaeditor', EWCFroalaeditor);
}
