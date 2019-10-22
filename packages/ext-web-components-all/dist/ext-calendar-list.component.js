import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_List from './Ext/calendar/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_list =
/*#__PURE__*/
function (_Ext_calendar_List) {
  _inheritsLoose(ExtCalendar_list, _Ext_calendar_List);

  function ExtCalendar_list() {
    var _this;

    _this = _Ext_calendar_List.call(this, [], []) || this;
    _this.xtype = 'calendar-list';
    return _this;
  }

  return ExtCalendar_list;
}(Ext_calendar_List);

export { ExtCalendar_list as default };
window.customElements.define('ext-calendar-list', HTMLParsedElement.withParsedCallback(ExtCalendar_list));