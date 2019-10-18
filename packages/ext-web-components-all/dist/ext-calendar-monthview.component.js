import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCalendar_monthviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Mo) {
  _inheritsLoose(ExtCalendar_monthviewComponent, _Ext_calendar_view_Mo);

  function ExtCalendar_monthviewComponent() {
    var _this;

    _this = _Ext_calendar_view_Mo.call(this, [], []) || this;
    _this.xtype = 'calendar-monthview';
    return _this;
  }

  return ExtCalendar_monthviewComponent;
}(Ext_calendar_view_Month); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-monthview', ExtCalendar_monthviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(ExtCalendar_monthviewComponent));