import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Day_Component from './Ext/calendar/panel/Day';
export var ExtCalendar_dayComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(ExtCalendar_dayComponent, _Ext_calendar_panel_D);

  function ExtCalendar_dayComponent() {
    return _Ext_calendar_panel_D.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_dayComponent;
}(Ext_calendar_panel_Day_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-day', ExtCalendar_dayComponent);
  });
})();