import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Week from './Ext/calendar/panel/Week';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_weekComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(ExtCalendar_weekComponent, _Ext_calendar_panel_W);

  function ExtCalendar_weekComponent() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-week';
    return _this;
  }

  return ExtCalendar_weekComponent;
}(Ext_calendar_panel_Week); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-week', ExtCalendar_weekComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-week', HTMLParsedElement.withParsedCallback(ExtCalendar_weekComponent));