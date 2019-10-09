import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_weeksheaderComponent =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(ExtCalendar_weeksheaderComponent, _Ext_calendar_header_);

  function ExtCalendar_weeksheaderComponent() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksheader';
    return _this;
  }

  return ExtCalendar_weeksheaderComponent;
}(Ext_calendar_header_Weeks); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksheader', ExtCalendar_weeksheaderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-weeksheader', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksheaderComponent));