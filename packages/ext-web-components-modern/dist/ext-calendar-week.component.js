import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_week = /*#__PURE__*/function (_Ext_calendar_panel_W) {
  _inheritsLoose(EWCCalendar_week, _Ext_calendar_panel_W);

  function EWCCalendar_week() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-week';
    return _this;
  }

  return EWCCalendar_week;
}(Ext_calendar_panel_Week);

export { EWCCalendar_week as default };

try {
  if (window.customElements.get('ext-calendar-week') == undefined) {
    window.customElements.define('ext-calendar-week', ElementParser.withParsedCallback(EWCCalendar_week));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-week') == undefined) {
    window.customElements.define('ext-calendar-week', EWCCalendar_week);
  }
}