import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_Event from './Ext/calendar/Event.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_event =
/*#__PURE__*/
function (_Ext_calendar_Event) {
  _inheritsLoose(ExtCalendar_event, _Ext_calendar_Event);

  function ExtCalendar_event() {
    var _this;

    _this = _Ext_calendar_Event.call(this, [], []) || this;
    _this.xtype = 'calendar-event';
    return _this;
  }

  return ExtCalendar_event;
}(Ext_calendar_Event);

export { ExtCalendar_event as default };
window.customElements.define('ext-calendar-event', HTMLParsedElement.withParsedCallback(ExtCalendar_event));