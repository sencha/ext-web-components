import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_dayview = /*#__PURE__*/function (_Ext_calendar_view_Da) {
  _inheritsLoose(EWCCalendar_dayview, _Ext_calendar_view_Da);

  var _super = _createSuper(EWCCalendar_dayview);

  function EWCCalendar_dayview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-dayview';
    return _this;
  }

  return EWCCalendar_dayview;
}(Ext_calendar_view_Day);

export { EWCCalendar_dayview as default };

try {
  if (window.customElements.get('ext-calendar-dayview') == undefined) {
    window.customElements.define('ext-calendar-dayview', ElementParser.withParsedCallback(EWCCalendar_dayview));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-dayview') == undefined) {
    window.customElements.define('ext-calendar-dayview', EWCCalendar_dayview);
  }
}