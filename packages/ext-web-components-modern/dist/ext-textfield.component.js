import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Text from './Ext/form/Text.js';
import ElementParser from './common/ElementParser.js';

var EWCTextfield = /*#__PURE__*/function (_Ext_form_Text) {
  _inheritsLoose(EWCTextfield, _Ext_form_Text);

  function EWCTextfield() {
    var _this;

    _this = _Ext_form_Text.call(this, [], []) || this;
    _this.xtype = 'textfield';
    return _this;
  }

  return EWCTextfield;
}(Ext_form_Text);

export { EWCTextfield as default };

try {
  if (window.customElements.get('ext-textfield') == undefined) {
    window.customElements.define('ext-textfield', ElementParser.withParsedCallback(EWCTextfield));
  }
} catch (e) {
  if (window.customElements.get('ext-textfield') == undefined) {
    window.customElements.define('ext-textfield', EWCTextfield);
  }
}