import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_List from './Ext/calendar/List.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_list = /*#__PURE__*/function (_Ext_calendar_List) {
  _inheritsLoose(EWCCalendar_list, _Ext_calendar_List);

  function EWCCalendar_list() {
    var _this;

    _this = _Ext_calendar_List.call(this, [], []) || this;
    _this.xtype = 'calendar-list';
    return _this;
  }

  return EWCCalendar_list;
}(Ext_calendar_List);

export { EWCCalendar_list as default };

try {
  if (window.customElements.get('ext-calendar-list') == undefined) {
    window.customElements.define('ext-calendar-list', ElementParser.withParsedCallback(EWCCalendar_list));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-list') == undefined) {
    window.customElements.define('ext-calendar-list', EWCCalendar_list);
  }
}