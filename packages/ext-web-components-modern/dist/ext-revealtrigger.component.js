import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRevealtrigger = /*#__PURE__*/function (_Ext_field_trigger_Re) {
  _inheritsLoose(EWCRevealtrigger, _Ext_field_trigger_Re);

  var _super = _createSuper(EWCRevealtrigger);

  function EWCRevealtrigger() {
    var _this;

    _this = _Ext_field_trigger_Re.call(this, [], []) || this;
    _this.xtype = 'revealtrigger';
    return _this;
  }

  return EWCRevealtrigger;
}(Ext_field_trigger_Reveal);

export { EWCRevealtrigger as default };

try {
  window.customElements.define('ext-revealtrigger', ElementParser.withParsedCallback(EWCRevealtrigger));
} catch (e) {
  window.customElements.define('ext-revealtrigger', EWCRevealtrigger);
}