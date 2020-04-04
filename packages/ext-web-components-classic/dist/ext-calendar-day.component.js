import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_day = /*#__PURE__*/function (_Ext_calendar_panel_D) {
  _inheritsLoose(EWCCalendar_day, _Ext_calendar_panel_D);

  var _super = _createSuper(EWCCalendar_day);

  function EWCCalendar_day() {
    var _this;

    _this = _Ext_calendar_panel_D.call(this, [], []) || this;
    _this.xtype = 'calendar-day';
    return _this;
  }

  return EWCCalendar_day;
}(Ext_calendar_panel_Day);

export { EWCCalendar_day as default };

try {
  if (window.customElements.get('ext-calendar-day') == undefined) {
    window.customElements.define('ext-calendar-day', ElementParser.withParsedCallback(EWCCalendar_day));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-day') == undefined) {
    window.customElements.define('ext-calendar-day', EWCCalendar_day);
  }
}