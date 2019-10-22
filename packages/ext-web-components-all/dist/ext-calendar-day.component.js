import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_day =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(ExtCalendar_day, _Ext_calendar_panel_D);

  function ExtCalendar_day() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-day';
    return _this;
  }

  return ExtCalendar_day;
}(Ext_calendar_panel_Day);

export { ExtCalendar_day as default };
window.customElements.define('ext-calendar-day', HTMLParsedElement.withParsedCallback(ExtCalendar_day));