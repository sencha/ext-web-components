import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_month = /*#__PURE__*/function (_Ext_calendar_panel_M) {
  _inheritsLoose(EWCCalendar_month, _Ext_calendar_panel_M);

  var _super = _createSuper(EWCCalendar_month);

  function EWCCalendar_month() {
    var _this;

    _this = _Ext_calendar_panel_M.call(this, [], []) || this;
    _this.xtype = 'calendar-month';
    return _this;
  }

  return EWCCalendar_month;
}(Ext_calendar_panel_Month);

export { EWCCalendar_month as default };

try {
  window.customElements.define('ext-calendar-month', ElementParser.withParsedCallback(EWCCalendar_month));
} catch (e) {
  window.customElements.define('ext-calendar-month', EWCCalendar_month);
}