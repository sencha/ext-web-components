import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_daysview = /*#__PURE__*/function (_Ext_calendar_view_Da) {
  _inheritsLoose(EWCCalendar_daysview, _Ext_calendar_view_Da);

  var _super = _createSuper(EWCCalendar_daysview);

  function EWCCalendar_daysview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-daysview';
    return _this;
  }

  return EWCCalendar_daysview;
}(Ext_calendar_view_Days);

export { EWCCalendar_daysview as default };

try {
  window.customElements.define('ext-calendar-daysview', ElementParser.withParsedCallback(EWCCalendar_daysview));
} catch (e) {
  window.customElements.define('ext-calendar-daysview', EWCCalendar_daysview);
}