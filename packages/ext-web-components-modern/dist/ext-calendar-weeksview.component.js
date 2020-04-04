import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_weeksview = /*#__PURE__*/function (_Ext_calendar_view_We) {
  _inheritsLoose(EWCCalendar_weeksview, _Ext_calendar_view_We);

  var _super = _createSuper(EWCCalendar_weeksview);

  function EWCCalendar_weeksview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weeksview';
    return _this;
  }

  return EWCCalendar_weeksview;
}(Ext_calendar_view_Weeks);

export { EWCCalendar_weeksview as default };

try {
  if (window.customElements.get('ext-calendar-weeksview') == undefined) {
    window.customElements.define('ext-calendar-weeksview', ElementParser.withParsedCallback(EWCCalendar_weeksview));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-weeksview') == undefined) {
    window.customElements.define('ext-calendar-weeksview', EWCCalendar_weeksview);
  }
}