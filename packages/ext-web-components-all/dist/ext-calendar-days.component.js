import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_days =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(ExtCalendar_days, _Ext_calendar_panel_D);

  function ExtCalendar_days() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-days';
    return _this;
  }

  return ExtCalendar_days;
}(Ext_calendar_panel_Days);

export { ExtCalendar_days as default };
window.customElements.define('ext-calendar-days', HTMLParsedElement.withParsedCallback(ExtCalendar_days));