import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Month_Component from './Ext/calendar/panel/Month';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_monthComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_M) {
  _inheritsLoose(ExtCalendar_monthComponent, _Ext_calendar_panel_M);

  function ExtCalendar_monthComponent() {
    var _this;

    _this = _Ext_calendar_panel_M.call(this) || this;
    _this.xtype = 'calendar-month';
    return _this;
  }

  return ExtCalendar_monthComponent;
}(Ext_calendar_panel_Month_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-month', ExtCalendar_monthComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-month', HTMLParsedElement.withParsedCallback(ExtCalendar_monthComponent));