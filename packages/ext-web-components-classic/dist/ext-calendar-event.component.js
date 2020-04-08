import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_Event from './Ext/calendar/Event.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_event = /*#__PURE__*/function (_Ext_calendar_Event) {
  _inheritsLoose(EWCCalendar_event, _Ext_calendar_Event);

  function EWCCalendar_event() {
    var _this;

    _this = _Ext_calendar_Event.call(this, [], []) || this;
    _this.xtype = 'calendar-event';
    return _this;
  }

  return EWCCalendar_event;
}(Ext_calendar_Event);

export { EWCCalendar_event as default };

try {
  if (window.customElements.get('ext-calendar-event') == undefined) {
    window.customElements.define('ext-calendar-event', ElementParser.withParsedCallback(EWCCalendar_event));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-event') == undefined) {
    window.customElements.define('ext-calendar-event', EWCCalendar_event);
  }
}