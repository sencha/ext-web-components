import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days_Component from './Ext/calendar/panel/Days';
export var ExtCalendar_daysComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(ExtCalendar_daysComponent, _Ext_calendar_panel_D);

  function ExtCalendar_daysComponent() {
    return _Ext_calendar_panel_D.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_daysComponent;
}(Ext_calendar_panel_Days_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-days', ExtCalendar_daysComponent);
  });
})();