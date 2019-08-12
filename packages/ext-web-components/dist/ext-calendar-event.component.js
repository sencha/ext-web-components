import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_Event_Component from './Ext/calendar/Event';
export var ExtCalendar_eventComponent =
/*#__PURE__*/
function (_Ext_calendar_Event_C) {
  _inheritsLoose(ExtCalendar_eventComponent, _Ext_calendar_Event_C);

  function ExtCalendar_eventComponent() {
    return _Ext_calendar_Event_C.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_eventComponent;
}(Ext_calendar_Event_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-event', ExtCalendar_eventComponent);
  });
})();