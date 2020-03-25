import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_calendar_picker = /*#__PURE__*/function (_Ext_calendar_form_Ca) {
  _inheritsLoose(EWCCalendar_calendar_picker, _Ext_calendar_form_Ca);

  var _super = _createSuper(EWCCalendar_calendar_picker);

  function EWCCalendar_calendar_picker() {
    var _this;

    _this = _Ext_calendar_form_Ca.call(this, [], []) || this;
    _this.xtype = 'calendar-calendar-picker';
    return _this;
  }

  return EWCCalendar_calendar_picker;
}(Ext_calendar_form_CalendarPicker);

export { EWCCalendar_calendar_picker as default };

try {
  window.customElements.define('ext-calendar-calendar-picker', ElementParser.withParsedCallback(EWCCalendar_calendar_picker));
} catch (e) {
  window.customElements.define('ext-calendar-calendar-picker', EWCCalendar_calendar_picker);
}