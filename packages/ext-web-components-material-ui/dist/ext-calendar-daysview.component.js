import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_daysview = /*#__PURE__*/function (_Ext_calendar_view_Da) {
  _inheritsLoose(EWCCalendar_daysview, _Ext_calendar_view_Da);

  function EWCCalendar_daysview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-daysview';
    return _this;
  }

  return EWCCalendar_daysview;
}(Ext_calendar_view_Days);

export { EWCCalendar_daysview as default };

try {
  if (window.customElements.get('ext-calendar-daysview') == undefined) {
    window.customElements.define('ext-calendar-daysview', ElementParser.withParsedCallback(EWCCalendar_daysview));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-daysview') == undefined) {
    window.customElements.define('ext-calendar-daysview', EWCCalendar_daysview);
  }
}