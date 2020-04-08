import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './common/ElementParser.js';

var EWCTextarea = /*#__PURE__*/function (_Ext_form_TextArea) {
  _inheritsLoose(EWCTextarea, _Ext_form_TextArea);

  function EWCTextarea() {
    var _this;

    _this = _Ext_form_TextArea.call(this, [], []) || this;
    _this.xtype = 'textarea';
    return _this;
  }

  return EWCTextarea;
}(Ext_form_TextArea);

export { EWCTextarea as default };

try {
  if (window.customElements.get('ext-textarea') == undefined) {
    window.customElements.define('ext-textarea', ElementParser.withParsedCallback(EWCTextarea));
  }
} catch (e) {
  if (window.customElements.get('ext-textarea') == undefined) {
    window.customElements.define('ext-textarea', EWCTextarea);
  }
}