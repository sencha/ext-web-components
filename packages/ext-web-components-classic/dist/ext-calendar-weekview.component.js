import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_weekview = /*#__PURE__*/function (_Ext_calendar_view_We) {
  _inheritsLoose(EWCCalendar_weekview, _Ext_calendar_view_We);

  var _super = _createSuper(EWCCalendar_weekview);

  function EWCCalendar_weekview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weekview';
    return _this;
  }

  return EWCCalendar_weekview;
}(Ext_calendar_view_Week);

export { EWCCalendar_weekview as default };

try {
  if (window.customElements.get('ext-calendar-weekview') == undefined) {
    window.customElements.define('ext-calendar-weekview', ElementParser.withParsedCallback(EWCCalendar_weekview));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-weekview') == undefined) {
    window.customElements.define('ext-calendar-weekview', EWCCalendar_weekview);
  }
}