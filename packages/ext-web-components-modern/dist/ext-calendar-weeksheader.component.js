import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_weeksheader = /*#__PURE__*/function (_Ext_calendar_header_) {
  _inheritsLoose(EWCCalendar_weeksheader, _Ext_calendar_header_);

  var _super = _createSuper(EWCCalendar_weeksheader);

  function EWCCalendar_weeksheader() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksheader';
    return _this;
  }

  return EWCCalendar_weeksheader;
}(Ext_calendar_header_Weeks);

export { EWCCalendar_weeksheader as default };

try {
  if (window.customElements.get('ext-calendar-weeksheader') == undefined) {
    window.customElements.define('ext-calendar-weeksheader', ElementParser.withParsedCallback(EWCCalendar_weeksheader));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-weeksheader') == undefined) {
    window.customElements.define('ext-calendar-weeksheader', EWCCalendar_weeksheader);
  }
}