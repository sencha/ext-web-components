import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatetrigger = /*#__PURE__*/function (_Ext_field_trigger_Da) {
  _inheritsLoose(EWCDatetrigger, _Ext_field_trigger_Da);

  function EWCDatetrigger() {
    var _this;

    _this = _Ext_field_trigger_Da.call(this, [], []) || this;
    _this.xtype = 'datetrigger';
    return _this;
  }

  return EWCDatetrigger;
}(Ext_field_trigger_Date);

export { EWCDatetrigger as default };

try {
  window.customElements.define('ext-datetrigger', ElementParser.withParsedCallback(EWCDatetrigger));
} catch (e) {
  window.customElements.define('ext-datetrigger', EWCDatetrigger);
}