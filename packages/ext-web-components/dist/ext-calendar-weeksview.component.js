import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Weeks_Component from './Ext/calendar/view/Weeks';
export var ExtCalendar_weeksviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(ExtCalendar_weeksviewComponent, _Ext_calendar_view_We);

  function ExtCalendar_weeksviewComponent() {
    return _Ext_calendar_view_We.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_weeksviewComponent;
}(Ext_calendar_view_Weeks_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-weeksview', ExtCalendar_weeksviewComponent);
  });
})();