import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_weeks = /*#__PURE__*/function (_Ext_calendar_panel_W) {
  _inheritsLoose(EWCCalendar_weeks, _Ext_calendar_panel_W);

  function EWCCalendar_weeks() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-weeks';
    return _this;
  }

  return EWCCalendar_weeks;
}(Ext_calendar_panel_Weeks);

export { EWCCalendar_weeks as default };

try {
  if (window.customElements.get('ext-calendar-weeks') == undefined) {
    window.customElements.define('ext-calendar-weeks', ElementParser.withParsedCallback(EWCCalendar_weeks));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-weeks') == undefined) {
    window.customElements.define('ext-calendar-weeks', EWCCalendar_weeks);
  }
}