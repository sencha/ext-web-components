import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_weeks = /*#__PURE__*/function (_Ext_calendar_panel_W) {
  _inheritsLoose(EWCCalendar_weeks, _Ext_calendar_panel_W);

  var _super = _createSuper(EWCCalendar_weeks);

  function EWCCalendar_weeks() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-weeks';
    return _this;
  }

  return EWCCalendar_weeks;
}(Ext_calendar_panel_Weeks);

export { EWCCalendar_weeks as default };

try {
  window.customElements.define('ext-calendar-weeks', ElementParser.withParsedCallback(EWCCalendar_weeks));
} catch (e) {
  window.customElements.define('ext-calendar-weeks', EWCCalendar_weeks);
}