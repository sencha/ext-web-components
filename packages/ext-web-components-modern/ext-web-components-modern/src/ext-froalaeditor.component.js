import Ext_froala_Editor from './Ext/froala/Editor.js';
import ElementParser from './common/ElementParser.js';

export default class EWCFroalaeditor extends Ext_froala_Editor {
  constructor() {
    super ([], []);
    this.xtype = 'froalaeditor';
  }
}
try {
  if (window.customElements.get('ext-froalaeditor') == undefined) {
    window.customElements.define('ext-froalaeditor', ElementParser.withParsedCallback(EWCFroalaeditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-froalaeditor') == undefined) {
    window.customElements.define('ext-froalaeditor', EWCFroalaeditor);
  }
}
