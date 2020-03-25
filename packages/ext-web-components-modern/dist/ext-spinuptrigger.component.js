import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSpinuptrigger = /*#__PURE__*/function (_Ext_field_trigger_Sp) {
  _inheritsLoose(EWCSpinuptrigger, _Ext_field_trigger_Sp);

  var _super = _createSuper(EWCSpinuptrigger);

  function EWCSpinuptrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spinuptrigger';
    return _this;
  }

  return EWCSpinuptrigger;
}(Ext_field_trigger_SpinUp);

export { EWCSpinuptrigger as default };

try {
  window.customElements.define('ext-spinuptrigger', ElementParser.withParsedCallback(EWCSpinuptrigger));
} catch (e) {
  window.customElements.define('ext-spinuptrigger', EWCSpinuptrigger);
}