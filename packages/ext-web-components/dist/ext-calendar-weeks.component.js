import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Weeks_Component from './Ext/calendar/panel/Weeks';
export var ExtCalendar_weeksComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(ExtCalendar_weeksComponent, _Ext_calendar_panel_W);

  function ExtCalendar_weeksComponent() {
    return _Ext_calendar_panel_W.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_weeksComponent;
}(Ext_calendar_panel_Weeks_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-weeks', ExtCalendar_weeksComponent);
  });
})();