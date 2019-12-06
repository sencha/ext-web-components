import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_calendar_panel_Month from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Month.js';
import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_month =
/*#__PURE__*/
function (_Ext_calendar_panel_M) {
  _inheritsLoose(EWCCalendar_month, _Ext_calendar_panel_M);

  function EWCCalendar_month() {
    var _this;

    _this = _Ext_calendar_panel_M.call(this, [], []) || this;
    _this.xtype = 'calendar-month';
    return _this;
  }

  return EWCCalendar_month;
}(Ext_calendar_panel_Month);

export { EWCCalendar_month as default };
window.customElements.define('ext-calendar-month', HTMLParsedElement.withParsedCallback(EWCCalendar_month));