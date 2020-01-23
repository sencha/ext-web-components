import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_HtmlEditor from './Ext/form/HtmlEditor.js';
import ElementParser from './ElementParser.js';

var EWCHtmleditor =
/*#__PURE__*/
function (_Ext_form_HtmlEditor) {
  _inheritsLoose(EWCHtmleditor, _Ext_form_HtmlEditor);

  function EWCHtmleditor() {
    var _this;

    _this = _Ext_form_HtmlEditor.call(this, [], []) || this;
    _this.xtype = 'htmleditor';
    return _this;
  }

  return EWCHtmleditor;
}(Ext_form_HtmlEditor);

export { EWCHtmleditor as default };

try {
  window.customElements.define('ext-htmleditor', ElementParser.withParsedCallback(EWCHtmleditor));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-htmleditor', EWCHtmleditor);
}