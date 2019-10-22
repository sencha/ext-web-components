import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_week =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(ExtCalendar_week, _Ext_calendar_panel_W);

  function ExtCalendar_week() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-week';
    return _this;
  }

  return ExtCalendar_week;
}(Ext_calendar_panel_Week);

export { ExtCalendar_week as default };
window.customElements.define('ext-calendar-week', HTMLParsedElement.withParsedCallback(ExtCalendar_week));