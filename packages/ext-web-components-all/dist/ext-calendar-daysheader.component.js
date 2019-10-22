import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Days from './Ext/calendar/header/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_daysheader =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(ExtCalendar_daysheader, _Ext_calendar_header_);

  function ExtCalendar_daysheader() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-daysheader';
    return _this;
  }

  return ExtCalendar_daysheader;
}(Ext_calendar_header_Days);

export { ExtCalendar_daysheader as default };
window.customElements.define('ext-calendar-daysheader', HTMLParsedElement.withParsedCallback(ExtCalendar_daysheader));