import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Days from './Ext/calendar/header/Days.js';
import ElementParser from './ElementParser.js';

var EWCCalendar_daysheader =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(EWCCalendar_daysheader, _Ext_calendar_header_);

  function EWCCalendar_daysheader() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-daysheader';
    return _this;
  }

  return EWCCalendar_daysheader;
}(Ext_calendar_header_Days);

export { EWCCalendar_daysheader as default };
window.customElements.define('ext-calendar-daysheader', ElementParser.withParsedCallback(EWCCalendar_daysheader));