import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_weeksview =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(ExtCalendar_weeksview, _Ext_calendar_view_We);

  function ExtCalendar_weeksview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksview';
    return _this;
  }

  return ExtCalendar_weeksview;
}(Ext_calendar_view_Weeks);

export { ExtCalendar_weeksview as default };
window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksview));