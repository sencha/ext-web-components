import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_days = /*#__PURE__*/function (_Ext_calendar_panel_D) {
  _inheritsLoose(EWCCalendar_days, _Ext_calendar_panel_D);

  function EWCCalendar_days() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-days';
    return _this;
  }

  return EWCCalendar_days;
}(Ext_calendar_panel_Days);

export { EWCCalendar_days as default };

try {
  if (window.customElements.get('ext-calendar-days') == undefined) {
    window.customElements.define('ext-calendar-days', ElementParser.withParsedCallback(EWCCalendar_days));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-days') == undefined) {
    window.customElements.define('ext-calendar-days', EWCCalendar_days);
  }
}