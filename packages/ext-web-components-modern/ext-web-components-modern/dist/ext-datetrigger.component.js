import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import ElementParser from './common/ElementParser.js';

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
  if (window.customElements.get('ext-datetrigger') == undefined) {
    window.customElements.define('ext-datetrigger', ElementParser.withParsedCallback(EWCDatetrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-datetrigger') == undefined) {
    window.customElements.define('ext-datetrigger', EWCDatetrigger);
  }
}