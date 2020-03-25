import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_days = /*#__PURE__*/function (_Ext_calendar_panel_D) {
  _inheritsLoose(EWCCalendar_days, _Ext_calendar_panel_D);

  var _super = _createSuper(EWCCalendar_days);

  function EWCCalendar_days() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-days';
    return _this;
  }

  return EWCCalendar_days;
}(Ext_calendar_panel_Days);

export { EWCCalendar_days as default };

try {
  window.customElements.define('ext-calendar-days', ElementParser.withParsedCallback(EWCCalendar_days));
} catch (e) {
  window.customElements.define('ext-calendar-days', EWCCalendar_days);
}