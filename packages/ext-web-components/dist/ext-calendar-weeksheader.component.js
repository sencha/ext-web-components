import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_header_Weeks from '@sencha/ext-runtime-base/dist/./Ext/calendar/header/Weeks.js';
import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_weeksheader =
/*#__PURE__*/
function (_Ext_calendar_header_) {
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
window.customElements.define('ext-calendar-weeksheader', HTMLParsedElement.withParsedCallback(EWCCalendar_weeksheader));