import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCleartrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Cl) {
  _inheritsLoose(EWCCleartrigger, _Ext_field_trigger_Cl);

  function EWCCleartrigger() {
    var _this;

    _this = _Ext_field_trigger_Cl.call(this, [], []) || this;
    _this.xtype = 'cleartrigger';
    return _this;
  }

  return EWCCleartrigger;
}(Ext_field_trigger_Clear);

export { EWCCleartrigger as default };

try {
  window.customElements.define('ext-cleartrigger', ElementParser.withParsedCallback(EWCCleartrigger));
} catch (e) {
  window.customElements.define('ext-cleartrigger', EWCCleartrigger);
}