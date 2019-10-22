import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_calendar_picker =
/*#__PURE__*/
function (_Ext_calendar_form_Ca) {
  _inheritsLoose(ExtCalendar_calendar_picker, _Ext_calendar_form_Ca);

  function ExtCalendar_calendar_picker() {
    var _this;

    _this = _Ext_calendar_form_Ca.call(this, [], []) || this;
    _this.xtype = 'calendar-calendar-picker';
    return _this;
  }

  return ExtCalendar_calendar_picker;
}(Ext_calendar_form_CalendarPicker);

export { ExtCalendar_calendar_picker as default };
window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(ExtCalendar_calendar_picker));