import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_monthview = /*#__PURE__*/function (_Ext_calendar_view_Mo) {
  _inheritsLoose(EWCCalendar_monthview, _Ext_calendar_view_Mo);

  var _super = _createSuper(EWCCalendar_monthview);

  function EWCCalendar_monthview() {
    var _this;

    _this = _Ext_calendar_view_Mo.call(this, [], []) || this;
    _this.xtype = 'calendar-monthview';
    return _this;
  }

  return EWCCalendar_monthview;
}(Ext_calendar_view_Month);

export { EWCCalendar_monthview as default };

try {
  if (window.customElements.get('ext-calendar-monthview') == undefined) {
    window.customElements.define('ext-calendar-monthview', ElementParser.withParsedCallback(EWCCalendar_monthview));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-monthview') == undefined) {
    window.customElements.define('ext-calendar-monthview', EWCCalendar_monthview);
  }
}