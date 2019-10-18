import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_Event from './Ext/calendar/Event.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCalendar_eventComponent =
/*#__PURE__*/
function (_Ext_calendar_Event) {
  _inheritsLoose(ExtCalendar_eventComponent, _Ext_calendar_Event);

  function ExtCalendar_eventComponent() {
    var _this;

    _this = _Ext_calendar_Event.call(this, [], []) || this;
    _this.xtype = 'calendar-event';
    return _this;
  }

  return ExtCalendar_eventComponent;
}(Ext_calendar_Event); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-event', ExtCalendar_eventComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-event', HTMLParsedElement.withParsedCallback(ExtCalendar_eventComponent));