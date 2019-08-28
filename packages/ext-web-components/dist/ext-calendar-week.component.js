import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Week_Component from './Ext/calendar/panel/Week';
export var ExtCalendar_weekComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(ExtCalendar_weekComponent, _Ext_calendar_panel_W);

  function ExtCalendar_weekComponent() {
    return _Ext_calendar_panel_W.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_weekComponent;
}(Ext_calendar_panel_Week_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-week', ExtCalendar_weekComponent);
  });
})();