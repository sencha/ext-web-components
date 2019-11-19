import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_calendar_pickerComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ca) {
  _inheritsLoose(ExtCalendar_calendar_pickerComponent, _Ext_calendar_form_Ca);

  function ExtCalendar_calendar_pickerComponent() {
    var _this;

    _this = _Ext_calendar_form_Ca.call(this, [], []) || this;
    _this.xtype = 'calendar-calendar-picker';
    return _this;
  }

  return ExtCalendar_calendar_pickerComponent;
}(Ext_calendar_form_CalendarPicker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-calendar-picker', ExtCalendar_calendar_pickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(ExtCalendar_calendar_pickerComponent));