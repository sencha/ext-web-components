import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Day_Component from './Ext/calendar/view/Day';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_dayviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(ExtCalendar_dayviewComponent, _Ext_calendar_view_Da);

  function ExtCalendar_dayviewComponent() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, {}, [], []) || this;
    _this.xtype = 'calendar-dayview';
    return _this;
  }

  return ExtCalendar_dayviewComponent;
}(Ext_calendar_view_Day_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-dayview', ExtCalendar_dayviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(ExtCalendar_dayviewComponent));