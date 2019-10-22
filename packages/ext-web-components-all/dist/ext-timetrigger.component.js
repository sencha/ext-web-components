import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTimetrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Ti) {
  _inheritsLoose(ExtTimetrigger, _Ext_field_trigger_Ti);

  function ExtTimetrigger() {
    var _this;

    _this = _Ext_field_trigger_Ti.call(this, [], []) || this;
    _this.xtype = 'timetrigger';
    return _this;
  }

  return ExtTimetrigger;
}(Ext_field_trigger_Time);

export { ExtTimetrigger as default };
window.customElements.define('ext-timetrigger', HTMLParsedElement.withParsedCallback(ExtTimetrigger));