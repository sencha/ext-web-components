import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_weeksheader = /*#__PURE__*/function (_Ext_calendar_header_) {
  _inheritsLoose(EWCCalendar_weeksheader, _Ext_calendar_header_);

  function EWCCalendar_weeksheader() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksheader';
    return _this;
  }

  return EWCCalendar_weeksheader;
}(Ext_calendar_header_Weeks);

export { EWCCalendar_weeksheader as default };

try {
  if (window.customElements.get('ext-calendar-weeksheader') == undefined) {
    window.customElements.define('ext-calendar-weeksheader', ElementParser.withParsedCallback(EWCCalendar_weeksheader));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-weeksheader') == undefined) {
    window.customElements.define('ext-calendar-weeksheader', EWCCalendar_weeksheader);
  }
}