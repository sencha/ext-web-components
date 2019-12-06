import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_calendar_view_Week from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Week.js';
import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_weekview =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(EWCCalendar_weekview, _Ext_calendar_view_We);

  function EWCCalendar_weekview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weekview';
    return _this;
  }

  return EWCCalendar_weekview;
}(Ext_calendar_view_Week);

export { EWCCalendar_weekview as default };
window.customElements.define('ext-calendar-weekview', HTMLParsedElement.withParsedCallback(EWCCalendar_weekview));