import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_weeks =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(ExtCalendar_weeks, _Ext_calendar_panel_W);

  function ExtCalendar_weeks() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-weeks';
    return _this;
  }

  return ExtCalendar_weeks;
}(Ext_calendar_panel_Weeks);

export { ExtCalendar_weeks as default };
window.customElements.define('ext-calendar-weeks', HTMLParsedElement.withParsedCallback(ExtCalendar_weeks));