import Ext_form_HtmlEditor from './Ext/form/HtmlEditor.js';
import ElementParser from './ElementParser.js';

export default class EWCHtmleditor extends Ext_form_HtmlEditor {
  constructor() {
    super ([], []);
    this.xtype = 'htmleditor';
  }
}
window.customElements.define('ext-htmleditor', ElementParser.withParsedCallback(EWCHtmleditor));
