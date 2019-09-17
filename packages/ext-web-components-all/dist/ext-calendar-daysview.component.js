import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Days_Component from './Ext/calendar/view/Days';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_daysviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(ExtCalendar_daysviewComponent, _Ext_calendar_view_Da);

  function ExtCalendar_daysviewComponent() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this) || this;
    _this.xtype = 'calendar-daysview';
    return _this;
  }

  return ExtCalendar_daysviewComponent;
}(Ext_calendar_view_Days_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysview', ExtCalendar_daysviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(ExtCalendar_daysviewComponent));