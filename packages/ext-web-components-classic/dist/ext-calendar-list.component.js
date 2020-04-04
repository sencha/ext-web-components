import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_List from './Ext/calendar/List.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_list = /*#__PURE__*/function (_Ext_calendar_List) {
  _inheritsLoose(EWCCalendar_list, _Ext_calendar_List);

  var _super = _createSuper(EWCCalendar_list);

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