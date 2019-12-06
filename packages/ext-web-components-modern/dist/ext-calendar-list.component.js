import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_calendar_List from '@sencha/ext-runtime-base/dist/./Ext/calendar/List.js';
import Ext_calendar_List from './Ext/calendar/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_list =
/*#__PURE__*/
function (_Ext_calendar_List) {
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
window.customElements.define('ext-calendar-list', HTMLParsedElement.withParsedCallback(EWCCalendar_list));