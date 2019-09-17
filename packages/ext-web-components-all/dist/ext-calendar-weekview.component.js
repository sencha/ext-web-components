import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Week_Component from './Ext/calendar/view/Week';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_weekviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(ExtCalendar_weekviewComponent, _Ext_calendar_view_We);

  function ExtCalendar_weekviewComponent() {
    var _this;

    _this = _Ext_calendar_view_We.call(this) || this;
    _this.xtype = 'calendar-weekview';
    return _this;
  }

  return ExtCalendar_weekviewComponent;
}(Ext_calendar_view_Week_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weekview', ExtCalendar_weekviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-weekview', HTMLParsedElement.withParsedCallback(ExtCalendar_weekviewComponent));