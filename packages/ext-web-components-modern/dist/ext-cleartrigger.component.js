import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import ElementParser from './ElementParser.js';

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
window.customElements.define('ext-cleartrigger', ElementParser.withParsedCallback(EWCCleartrigger));