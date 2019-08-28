import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Month_Component from './Ext/calendar/view/Month';
export var ExtCalendar_monthviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Mo) {
  _inheritsLoose(ExtCalendar_monthviewComponent, _Ext_calendar_view_Mo);

  function ExtCalendar_monthviewComponent() {
    return _Ext_calendar_view_Mo.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_monthviewComponent;
}(Ext_calendar_view_Month_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-monthview', ExtCalendar_monthviewComponent);
  });
})();