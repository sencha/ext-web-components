import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_calendar_picker = /*#__PURE__*/function (_Ext_calendar_form_Ca) {
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

try {
  if (window.customElements.get('ext-calendar-calendar-picker') == undefined) {
    window.customElements.define('ext-calendar-calendar-picker', ElementParser.withParsedCallback(EWCCalendar_calendar_picker));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-calendar-picker') == undefined) {
    window.customElements.define('ext-calendar-calendar-picker', EWCCalendar_calendar_picker);
  }
}