import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days from './Ext/calendar/panel/Days';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_daysComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_D) {
  _inheritsLoose(ExtCalendar_daysComponent, _Ext_calendar_panel_D);

  function ExtCalendar_daysComponent() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-days';
    return _this;
  }

  return ExtCalendar_daysComponent;
}(Ext_calendar_panel_Days); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-days', ExtCalendar_daysComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-days', HTMLParsedElement.withParsedCallback(ExtCalendar_daysComponent));