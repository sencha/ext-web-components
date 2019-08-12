import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Day_Component from './Ext/calendar/view/Day';
export var ExtCalendar_dayviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(ExtCalendar_dayviewComponent, _Ext_calendar_view_Da);

  function ExtCalendar_dayviewComponent() {
    return _Ext_calendar_view_Da.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_dayviewComponent;
}(Ext_calendar_view_Day_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-dayview', ExtCalendar_dayviewComponent);
  });
})();