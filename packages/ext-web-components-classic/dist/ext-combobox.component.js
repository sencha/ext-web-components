import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_ComboBox from './Ext/form/ComboBox.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCombobox =
/*#__PURE__*/
function (_Ext_form_ComboBox) {
  _inheritsLoose(EWCCombobox, _Ext_form_ComboBox);

  function EWCCombobox() {
    var _this;

    _this = _Ext_form_ComboBox.call(this, [], []) || this;
    _this.xtype = 'combobox';
    return _this;
  }

  return EWCCombobox;
}(Ext_form_ComboBox);

export { EWCCombobox as default };

try {
  window.customElements.define('ext-combobox', ElementParser.withParsedCallback(EWCCombobox));
} catch (e) {
  window.customElements.define('ext-combobox', EWCCombobox);
}