import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import ElementParser from './common/ElementParser.js';

var EWCTimetrigger = /*#__PURE__*/function (_Ext_field_trigger_Ti) {
  _inheritsLoose(EWCTimetrigger, _Ext_field_trigger_Ti);

  var _super = _createSuper(EWCTimetrigger);

  function EWCTimetrigger() {
    var _this;

    _this = _Ext_field_trigger_Ti.call(this, [], []) || this;
    _this.xtype = 'timetrigger';
    return _this;
  }

  return EWCTimetrigger;
}(Ext_field_trigger_Time);

export { EWCTimetrigger as default };

try {
  if (window.customElements.get('ext-timetrigger') == undefined) {
    window.customElements.define('ext-timetrigger', ElementParser.withParsedCallback(EWCTimetrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-timetrigger') == undefined) {
    window.customElements.define('ext-timetrigger', EWCTimetrigger);
  }
}