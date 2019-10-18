import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCalendar_weeksviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(ExtCalendar_weeksviewComponent, _Ext_calendar_view_We);

  function ExtCalendar_weeksviewComponent() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksview';
    return _this;
  }

  return ExtCalendar_weeksviewComponent;
}(Ext_calendar_view_Weeks); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksview', ExtCalendar_weeksviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksviewComponent));