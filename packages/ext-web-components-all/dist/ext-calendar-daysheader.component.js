import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Days_Component from './Ext/calendar/header/Days';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_daysheaderComponent =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(ExtCalendar_daysheaderComponent, _Ext_calendar_header_);

  function ExtCalendar_daysheaderComponent() {
    var _this;

    _this = _Ext_calendar_header_.call(this) || this;
    _this.xtype = 'calendar-daysheader';
    return _this;
  }

  return ExtCalendar_daysheaderComponent;
}(Ext_calendar_header_Days_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysheader', ExtCalendar_daysheaderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-daysheader', HTMLParsedElement.withParsedCallback(ExtCalendar_daysheaderComponent));