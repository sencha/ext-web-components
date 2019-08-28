import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Weeks_Component from './Ext/calendar/header/Weeks';
export var ExtCalendar_weeksheaderComponent =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(ExtCalendar_weeksheaderComponent, _Ext_calendar_header_);

  function ExtCalendar_weeksheaderComponent() {
    return _Ext_calendar_header_.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_weeksheaderComponent;
}(Ext_calendar_header_Weeks_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-weeksheader', ExtCalendar_weeksheaderComponent);
  });
})();