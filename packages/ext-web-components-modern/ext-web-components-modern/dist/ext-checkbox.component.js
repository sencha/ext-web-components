import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './common/ElementParser.js';

var EWCCheckbox = /*#__PURE__*/function (_Ext_form_Checkbox) {
  _inheritsLoose(EWCCheckbox, _Ext_form_Checkbox);

  function EWCCheckbox() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkbox';
    return _this;
  }

  return EWCCheckbox;
}(Ext_form_Checkbox);

export { EWCCheckbox as default };

try {
  if (window.customElements.get('ext-checkbox') == undefined) {
    window.customElements.define('ext-checkbox', ElementParser.withParsedCallback(EWCCheckbox));
  }
} catch (e) {
  if (window.customElements.get('ext-checkbox') == undefined) {
    window.customElements.define('ext-checkbox', EWCCheckbox);
  }
}