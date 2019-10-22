import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_daysview =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(ExtCalendar_daysview, _Ext_calendar_view_Da);

  function ExtCalendar_daysview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-daysview';
    return _this;
  }

  return ExtCalendar_daysview;
}(Ext_calendar_view_Days);

export { ExtCalendar_daysview as default };
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(ExtCalendar_daysview));