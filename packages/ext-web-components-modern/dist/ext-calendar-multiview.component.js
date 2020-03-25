import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCalendar_multiview = /*#__PURE__*/function (_Ext_calendar_view_Mu) {
  _inheritsLoose(EWCCalendar_multiview, _Ext_calendar_view_Mu);

  var _super = _createSuper(EWCCalendar_multiview);

  function EWCCalendar_multiview() {
    var _this;

    _this = _Ext_calendar_view_Mu.call(this, [], []) || this;
    _this.xtype = 'calendar-multiview';
    return _this;
  }

  return EWCCalendar_multiview;
}(Ext_calendar_view_Multi);

export { EWCCalendar_multiview as default };

try {
  window.customElements.define('ext-calendar-multiview', ElementParser.withParsedCallback(EWCCalendar_multiview));
} catch (e) {
  window.customElements.define('ext-calendar-multiview', EWCCalendar_multiview);
}