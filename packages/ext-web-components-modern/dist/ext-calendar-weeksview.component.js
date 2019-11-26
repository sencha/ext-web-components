import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_view_Weeks from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Weeks.js';
import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_weeksview =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(EWCCalendar_weeksview, _Ext_calendar_view_We);

  function EWCCalendar_weeksview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksview';
    return _this;
  }

  return EWCCalendar_weeksview;
}(Ext_calendar_view_Weeks);

export { EWCCalendar_weeksview as default };
window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(EWCCalendar_weeksview));