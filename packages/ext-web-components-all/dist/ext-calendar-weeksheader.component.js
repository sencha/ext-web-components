import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_weeksheader =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(ExtCalendar_weeksheader, _Ext_calendar_header_);

  function ExtCalendar_weeksheader() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksheader';
    return _this;
  }

  return ExtCalendar_weeksheader;
}(Ext_calendar_header_Weeks);

export { ExtCalendar_weeksheader as default };
window.customElements.define('ext-calendar-weeksheader', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksheader));