import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_calendar_view_Day from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Day.js';
import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_dayview =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(EWCCalendar_dayview, _Ext_calendar_view_Da);

  function EWCCalendar_dayview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-dayview';
    return _this;
  }

  return EWCCalendar_dayview;
}(Ext_calendar_view_Day);

export { EWCCalendar_dayview as default };
window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(EWCCalendar_dayview));