import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import ElementParser from './common/ElementParser.js';

var EWCSpindowntrigger = /*#__PURE__*/function (_Ext_field_trigger_Sp) {
  _inheritsLoose(EWCSpindowntrigger, _Ext_field_trigger_Sp);

  var _super = _createSuper(EWCSpindowntrigger);

  function EWCSpindowntrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spindowntrigger';
    return _this;
  }

  return EWCSpindowntrigger;
}(Ext_field_trigger_SpinDown);

export { EWCSpindowntrigger as default };

try {
  if (window.customElements.get('ext-spindowntrigger') == undefined) {
    window.customElements.define('ext-spindowntrigger', ElementParser.withParsedCallback(EWCSpindowntrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-spindowntrigger') == undefined) {
    window.customElements.define('ext-spindowntrigger', EWCSpindowntrigger);
  }
}