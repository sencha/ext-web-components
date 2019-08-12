import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_CalendarPicker_Component from './Ext/calendar/form/CalendarPicker';
export var ExtCalendar_calendar_pickerComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ca) {
  _inheritsLoose(ExtCalendar_calendar_pickerComponent, _Ext_calendar_form_Ca);

  function ExtCalendar_calendar_pickerComponent() {
    return _Ext_calendar_form_Ca.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_calendar_pickerComponent;
}(Ext_calendar_form_CalendarPicker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-calendar-picker', ExtCalendar_calendar_pickerComponent);
  });
})();