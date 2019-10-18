import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCalendar_dayComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(ExtCalendar_dayComponent, _Ext_calendar_panel_D);

  function ExtCalendar_dayComponent() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-day';
    return _this;
  }

  return ExtCalendar_dayComponent;
}(Ext_calendar_panel_Day); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-day', ExtCalendar_dayComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-day', HTMLParsedElement.withParsedCallback(ExtCalendar_dayComponent));