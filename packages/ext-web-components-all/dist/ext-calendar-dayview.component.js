import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_dayview =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(ExtCalendar_dayview, _Ext_calendar_view_Da);

  function ExtCalendar_dayview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-dayview';
    return _this;
  }

  return ExtCalendar_dayview;
}(Ext_calendar_view_Day);

export { ExtCalendar_dayview as default };
window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(ExtCalendar_dayview));