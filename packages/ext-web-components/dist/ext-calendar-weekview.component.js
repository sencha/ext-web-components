import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Week_Component from './Ext/calendar/view/Week';
export var ExtCalendar_weekviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(ExtCalendar_weekviewComponent, _Ext_calendar_view_We);

  function ExtCalendar_weekviewComponent() {
    return _Ext_calendar_view_We.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_weekviewComponent;
}(Ext_calendar_view_Week_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-weekview', ExtCalendar_weekviewComponent);
  });
})();