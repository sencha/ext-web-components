import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Panel_Component from './Ext/calendar/panel/Panel';
export var ExtCalendarComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_P) {
  _inheritsLoose(ExtCalendarComponent, _Ext_calendar_panel_P);

  function ExtCalendarComponent() {
    return _Ext_calendar_panel_P.call(this, '', '', {}, '') || this;
  }

  return ExtCalendarComponent;
}(Ext_calendar_panel_Panel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar', ExtCalendarComponent);
  });
})();