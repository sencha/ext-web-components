import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_timefield = /*#__PURE__*/function (_Ext_calendar_form_Ti) {
  _inheritsLoose(EWCCalendar_timefield, _Ext_calendar_form_Ti);

  var _super = _createSuper(EWCCalendar_timefield);

  function EWCCalendar_timefield() {
    var _this;

    _this = _Ext_calendar_form_Ti.call(this, [], []) || this;
    _this.xtype = 'calendar-timefield';
    return _this;
  }

  return EWCCalendar_timefield;
}(Ext_calendar_form_TimeField);

export { EWCCalendar_timefield as default };

try {
  if (window.customElements.get('ext-calendar-timefield') == undefined) {
    window.customElements.define('ext-calendar-timefield', ElementParser.withParsedCallback(EWCCalendar_timefield));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-timefield') == undefined) {
    window.customElements.define('ext-calendar-timefield', EWCCalendar_timefield);
  }
}