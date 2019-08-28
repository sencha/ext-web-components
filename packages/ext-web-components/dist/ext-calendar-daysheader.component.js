import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Days_Component from './Ext/calendar/header/Days';
export var ExtCalendar_daysheaderComponent =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(ExtCalendar_daysheaderComponent, _Ext_calendar_header_);

  function ExtCalendar_daysheaderComponent() {
    return _Ext_calendar_header_.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_daysheaderComponent;
}(Ext_calendar_header_Days_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-daysheader', ExtCalendar_daysheaderComponent);
  });
})();