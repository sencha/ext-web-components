import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_ComboBox from './Ext/form/ComboBox.js';
import ElementParser from './common/ElementParser.js';

var EWCCombo = /*#__PURE__*/function (_Ext_form_ComboBox) {
  _inheritsLoose(EWCCombo, _Ext_form_ComboBox);

  function EWCCombo() {
    var _this;

    _this = _Ext_form_ComboBox.call(this, [], []) || this;
    _this.xtype = 'combo';
    return _this;
  }

  return EWCCombo;
}(Ext_form_ComboBox);

export { EWCCombo as default };

try {
  if (window.customElements.get('ext-combo') == undefined) {
    window.customElements.define('ext-combo', ElementParser.withParsedCallback(EWCCombo));
  }
} catch (e) {
  if (window.customElements.get('ext-combo') == undefined) {
    window.customElements.define('ext-combo', EWCCombo);
  }
}