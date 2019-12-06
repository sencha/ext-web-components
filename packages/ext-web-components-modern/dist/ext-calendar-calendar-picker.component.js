import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_calendar_form_CalendarPicker from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/CalendarPicker.js';
import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_calendar_picker =
/*#__PURE__*/
function (_Ext_calendar_form_Ca) {
  _inheritsLoose(EWCCalendar_calendar_picker, _Ext_calendar_form_Ca);

  function EWCCalendar_calendar_picker() {
    var _this;

    _this = _Ext_calendar_form_Ca.call(this, [], []) || this;
    _this.xtype = 'calendar-calendar-picker';
    return _this;
  }

  return EWCCalendar_calendar_picker;
}(Ext_calendar_form_CalendarPicker);

export { EWCCalendar_calendar_picker as default };
window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(EWCCalendar_calendar_picker));