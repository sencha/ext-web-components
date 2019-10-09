import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendarComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_P) {
  _inheritsLoose(ExtCalendarComponent, _Ext_calendar_panel_P);

  function ExtCalendarComponent() {
    var _this;

    _this = _Ext_calendar_panel_P.call(this, [], []) || this;
    _this.xtype = 'calendar';
    return _this;
  }

  return ExtCalendarComponent;
}(Ext_calendar_panel_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar', ExtCalendarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(ExtCalendarComponent));