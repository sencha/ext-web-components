import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_form_add = /*#__PURE__*/function (_Ext_calendar_form_Ad) {
  _inheritsLoose(EWCCalendar_form_add, _Ext_calendar_form_Ad);

  var _super = _createSuper(EWCCalendar_form_add);

  function EWCCalendar_form_add() {
    var _this;

    _this = _Ext_calendar_form_Ad.call(this, [], []) || this;
    _this.xtype = 'calendar-form-add';
    return _this;
  }

  return EWCCalendar_form_add;
}(Ext_calendar_form_Add);

export { EWCCalendar_form_add as default };

try {
  if (window.customElements.get('ext-calendar-form-add') == undefined) {
    window.customElements.define('ext-calendar-form-add', ElementParser.withParsedCallback(EWCCalendar_form_add));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-form-add') == undefined) {
    window.customElements.define('ext-calendar-form-add', EWCCalendar_form_add);
  }
}