import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField.js';
import ElementParser from './ElementParser.js';

var EWCCalendar_timefield =
/*#__PURE__*/
function (_Ext_calendar_form_Ti) {
  _inheritsLoose(EWCCalendar_timefield, _Ext_calendar_form_Ti);

  function EWCCalendar_timefield() {
    var _this;

    _this = _Ext_calendar_form_Ti.call(this, [], []) || this;
    _this.xtype = 'calendar-timefield';
    return _this;
  }

  return EWCCalendar_timefield;
}(Ext_calendar_form_TimeField);

export { EWCCalendar_timefield as default };
window.customElements.define('ext-calendar-timefield', ElementParser.withParsedCallback(EWCCalendar_timefield));