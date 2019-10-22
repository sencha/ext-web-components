import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_month =
/*#__PURE__*/
function (_Ext_calendar_panel_M) {
  _inheritsLoose(ExtCalendar_month, _Ext_calendar_panel_M);

  function ExtCalendar_month() {
    var _this;

    _this = _Ext_calendar_panel_M.call(this, [], []) || this;
    _this.xtype = 'calendar-month';
    return _this;
  }

  return ExtCalendar_month;
}(Ext_calendar_panel_Month);

export { ExtCalendar_month as default };
window.customElements.define('ext-calendar-month', HTMLParsedElement.withParsedCallback(ExtCalendar_month));