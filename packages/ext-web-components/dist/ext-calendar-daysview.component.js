import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Days_Component from './Ext/calendar/view/Days';
export var ExtCalendar_daysviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(ExtCalendar_daysviewComponent, _Ext_calendar_view_Da);

  function ExtCalendar_daysviewComponent() {
    return _Ext_calendar_view_Da.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_daysviewComponent;
}(Ext_calendar_view_Days_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-daysview', ExtCalendar_daysviewComponent);
  });
})();