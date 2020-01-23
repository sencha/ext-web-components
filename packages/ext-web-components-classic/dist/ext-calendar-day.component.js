import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import ElementParser from './ElementParser.js';

var EWCCalendar_day =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(EWCCalendar_day, _Ext_calendar_panel_D);

  function EWCCalendar_day() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-day';
    return _this;
  }

  return EWCCalendar_day;
}(Ext_calendar_panel_Day);

export { EWCCalendar_day as default };

try {
  window.customElements.define('ext-calendar-day', ElementParser.withParsedCallback(EWCCalendar_day));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-calendar-day', EWCCalendar_day);
}