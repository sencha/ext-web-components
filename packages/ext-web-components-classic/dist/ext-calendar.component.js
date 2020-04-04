import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar = /*#__PURE__*/function (_Ext_calendar_panel_P) {
  _inheritsLoose(EWCCalendar, _Ext_calendar_panel_P);

  var _super = _createSuper(EWCCalendar);

  function EWCCalendar() {
    var _this;

    _this = _Ext_calendar_panel_P.call(this, [], []) || this;
    _this.xtype = 'calendar';
    return _this;
  }

  return EWCCalendar;
}(Ext_calendar_panel_Panel);

export { EWCCalendar as default };

try {
  if (window.customElements.get('ext-calendar') == undefined) {
    window.customElements.define('ext-calendar', ElementParser.withParsedCallback(EWCCalendar));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar') == undefined) {
    window.customElements.define('ext-calendar', EWCCalendar);
  }
}