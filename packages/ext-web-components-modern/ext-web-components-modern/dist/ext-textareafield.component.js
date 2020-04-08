import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './common/ElementParser.js';

var EWCTextareafield = /*#__PURE__*/function (_Ext_form_TextArea) {
  _inheritsLoose(EWCTextareafield, _Ext_form_TextArea);

  function EWCTextareafield() {
    var _this;

    _this = _Ext_form_TextArea.call(this, [], []) || this;
    _this.xtype = 'textareafield';
    return _this;
  }

  return EWCTextareafield;
}(Ext_form_TextArea);

export { EWCTextareafield as default };

try {
  if (window.customElements.get('ext-textareafield') == undefined) {
    window.customElements.define('ext-textareafield', ElementParser.withParsedCallback(EWCTextareafield));
  }
} catch (e) {
  if (window.customElements.get('ext-textareafield') == undefined) {
    window.customElements.define('ext-textareafield', EWCTextareafield);
  }
}