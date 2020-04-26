import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_month = /*#__PURE__*/function (_Ext_calendar_panel_M) {
  _inheritsLoose(EWCCalendar_month, _Ext_calendar_panel_M);

  function EWCCalendar_month() {
    var _this;

    _this = _Ext_calendar_panel_M.call(this, [], []) || this;
    _this.xtype = 'calendar-month';
    return _this;
  }

  return EWCCalendar_month;
}(Ext_calendar_panel_Month);

export { EWCCalendar_month as default };

try {
  if (window.customElements.get('ext-calendar-month') == undefined) {
    window.customElements.define('ext-calendar-month', ElementParser.withParsedCallback(EWCCalendar_month));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-month') == undefined) {
    window.customElements.define('ext-calendar-month', EWCCalendar_month);
  }
}