import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import ElementParser from './ElementParser.js';

var EWCCalendar_weekview =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(EWCCalendar_weekview, _Ext_calendar_view_We);

  function EWCCalendar_weekview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weekview';
    return _this;
  }

  return EWCCalendar_weekview;
}(Ext_calendar_view_Week);

export { EWCCalendar_weekview as default };

try {
  window.customElements.define('ext-calendar-weekview', ElementParser.withParsedCallback(EWCCalendar_weekview));
} catch (e) {
  window.customElements.define('ext-calendar-weekview', EWCCalendar_weekview);
}