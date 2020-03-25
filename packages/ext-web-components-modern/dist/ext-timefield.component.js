import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_Time from './Ext/field/Time.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTimefield = /*#__PURE__*/function (_Ext_field_Time) {
  _inheritsLoose(EWCTimefield, _Ext_field_Time);

  var _super = _createSuper(EWCTimefield);

  function EWCTimefield() {
    var _this;

    _this = _Ext_field_Time.call(this, [], []) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return EWCTimefield;
}(Ext_field_Time);

export { EWCTimefield as default };

try {
  window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));
} catch (e) {
  window.customElements.define('ext-timefield', EWCTimefield);
}