import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_header_Days from './Ext/calendar/header/Days.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_daysheader = /*#__PURE__*/function (_Ext_calendar_header_) {
  _inheritsLoose(EWCCalendar_daysheader, _Ext_calendar_header_);

  var _super = _createSuper(EWCCalendar_daysheader);

  function EWCCalendar_daysheader() {
    var _this;

    _this = _Ext_calendar_header_.call(this, [], []) || this;
    _this.xtype = 'calendar-daysheader';
    return _this;
  }

  return EWCCalendar_daysheader;
}(Ext_calendar_header_Days);

export { EWCCalendar_daysheader as default };

try {
  window.customElements.define('ext-calendar-daysheader', ElementParser.withParsedCallback(EWCCalendar_daysheader));
} catch (e) {
  window.customElements.define('ext-calendar-daysheader', EWCCalendar_daysheader);
}