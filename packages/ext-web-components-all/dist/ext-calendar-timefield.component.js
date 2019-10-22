import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_timefield =
/*#__PURE__*/
function (_Ext_calendar_form_Ti) {
  _inheritsLoose(ExtCalendar_timefield, _Ext_calendar_form_Ti);

  function ExtCalendar_timefield() {
    var _this;

    _this = _Ext_calendar_form_Ti.call(this, [], []) || this;
    _this.xtype = 'calendar-timefield';
    return _this;
  }

  return ExtCalendar_timefield;
}(Ext_calendar_form_TimeField);

export { ExtCalendar_timefield as default };
window.customElements.define('ext-calendar-timefield', HTMLParsedElement.withParsedCallback(ExtCalendar_timefield));