import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_TimeField_Component from './Ext/calendar/form/TimeField';
export var ExtCalendar_timefieldComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ti) {
  _inheritsLoose(ExtCalendar_timefieldComponent, _Ext_calendar_form_Ti);

  function ExtCalendar_timefieldComponent() {
    return _Ext_calendar_form_Ti.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_timefieldComponent;
}(Ext_calendar_form_TimeField_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-timefield', ExtCalendar_timefieldComponent);
  });
})();