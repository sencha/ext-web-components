import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_calendar_view_Month from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Month.js';
import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_monthview =
/*#__PURE__*/
function (_Ext_calendar_view_Mo) {
  _inheritsLoose(EWCCalendar_monthview, _Ext_calendar_view_Mo);

  function EWCCalendar_monthview() {
    var _this;

    _this = _Ext_calendar_view_Mo.call(this, [], []) || this;
    _this.xtype = 'calendar-monthview';
    return _this;
  }

  return EWCCalendar_monthview;
}(Ext_calendar_view_Month);

export { EWCCalendar_monthview as default };
window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(EWCCalendar_monthview));