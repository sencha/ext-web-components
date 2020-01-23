import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import ElementParser from './ElementParser.js';

var EWCExpandtrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(EWCExpandtrigger, _Ext_field_trigger_Ex);

  function EWCExpandtrigger() {
    var _this;

    _this = _Ext_field_trigger_Ex.call(this, [], []) || this;
    _this.xtype = 'expandtrigger';
    return _this;
  }

  return EWCExpandtrigger;
}(Ext_field_trigger_Expand);

export { EWCExpandtrigger as default };

try {
  window.customElements.define('ext-expandtrigger', ElementParser.withParsedCallback(EWCExpandtrigger));
} catch (e) {
  window.customElements.define('ext-expandtrigger', EWCExpandtrigger);
}