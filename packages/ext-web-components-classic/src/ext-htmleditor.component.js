import Ext_form_HtmlEditor from './Ext/form/HtmlEditor.js';
import ElementParser from './common/ElementParser.js';

export default class EWCHtmleditor extends Ext_form_HtmlEditor {
  constructor() {
    super ([], []);
    this.xtype = 'htmleditor';
  }
}
try {
  if (window.customElements.get('ext-htmleditor') == undefined) {
    window.customElements.define('ext-htmleditor', ElementParser.withParsedCallback(EWCHtmleditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-htmleditor') == undefined) {
    window.customElements.define('ext-htmleditor', EWCHtmleditor);
  }
}
