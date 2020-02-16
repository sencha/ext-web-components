import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTimetrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Ti) {
  _inheritsLoose(EWCTimetrigger, _Ext_field_trigger_Ti);

  function EWCTimetrigger() {
    var _this;

    _this = _Ext_field_trigger_Ti.call(this, [], []) || this;
    _this.xtype = 'timetrigger';
    return _this;
  }

  return EWCTimetrigger;
}(Ext_field_trigger_Time);

export { EWCTimetrigger as default };

try {
  window.customElements.define('ext-timetrigger', ElementParser.withParsedCallback(EWCTimetrigger));
} catch (e) {
  window.customElements.define('ext-timetrigger', EWCTimetrigger);
}