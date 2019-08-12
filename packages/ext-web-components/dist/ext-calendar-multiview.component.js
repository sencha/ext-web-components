import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Multi_Component from './Ext/calendar/view/Multi';
export var ExtCalendar_multiviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Mu) {
  _inheritsLoose(ExtCalendar_multiviewComponent, _Ext_calendar_view_Mu);

  function ExtCalendar_multiviewComponent() {
    return _Ext_calendar_view_Mu.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_multiviewComponent;
}(Ext_calendar_view_Multi_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-multiview', ExtCalendar_multiviewComponent);
  });
})();