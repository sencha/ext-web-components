import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import ElementParser from './common/ElementParser.js';

var EWCTrigger = /*#__PURE__*/function (_Ext_field_trigger_Tr) {
  _inheritsLoose(EWCTrigger, _Ext_field_trigger_Tr);

  function EWCTrigger() {
    var _this;

    _this = _Ext_field_trigger_Tr.call(this, [], []) || this;
    _this.xtype = 'trigger';
    return _this;
  }

  return EWCTrigger;
}(Ext_field_trigger_Trigger);

export { EWCTrigger as default };

try {
  if (window.customElements.get('ext-trigger') == undefined) {
    window.customElements.define('ext-trigger', ElementParser.withParsedCallback(EWCTrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-trigger') == undefined) {
    window.customElements.define('ext-trigger', EWCTrigger);
  }
}