import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSpindowntrigger = /*#__PURE__*/function (_Ext_field_trigger_Sp) {
  _inheritsLoose(EWCSpindowntrigger, _Ext_field_trigger_Sp);

  function EWCSpindowntrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spindowntrigger';
    return _this;
  }

  return EWCSpindowntrigger;
}(Ext_field_trigger_SpinDown);

export { EWCSpindowntrigger as default };

try {
  window.customElements.define('ext-spindowntrigger', ElementParser.withParsedCallback(EWCSpindowntrigger));
} catch (e) {
  window.customElements.define('ext-spindowntrigger', EWCSpindowntrigger);
}