import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import ElementParser from './runtime/ElementParser.js';

var EWCExpandtrigger = /*#__PURE__*/function (_Ext_field_trigger_Ex) {
  _inheritsLoose(EWCExpandtrigger, _Ext_field_trigger_Ex);

  var _super = _createSuper(EWCExpandtrigger);

  function EWCExpandtrigger() {
    var _this;

    _this = _Ext_field_trigger_Ex.call(this, [], []) || this;
    _this.xtype = 'expandtrigger';
    return _this;
  }

  return EWCExpandtrigger;
}(Ext_field_trigger_Expand);

export { EWCExpandtrigger as default };

try {
  window.customElements.define('ext-expandtrigger', ElementParser.withParsedCallback(EWCExpandtrigger));
} catch (e) {
  window.customElements.define('ext-expandtrigger', EWCExpandtrigger);
}