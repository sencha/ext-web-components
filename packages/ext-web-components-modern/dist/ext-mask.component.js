import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Mask from './Ext/Mask.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMask = /*#__PURE__*/function (_Ext_Mask) {
  _inheritsLoose(EWCMask, _Ext_Mask);

  var _super = _createSuper(EWCMask);

  function EWCMask() {
    var _this;

    _this = _Ext_Mask.call(this, [], []) || this;
    _this.xtype = 'mask';
    return _this;
  }

  return EWCMask;
}(Ext_Mask);

export { EWCMask as default };

try {
  window.customElements.define('ext-mask', ElementParser.withParsedCallback(EWCMask));
} catch (e) {
  window.customElements.define('ext-mask', EWCMask);
}