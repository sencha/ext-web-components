import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Button from './Ext/Button.js';
import ElementParser from './runtime/ElementParser.js';

var EWCButton = /*#__PURE__*/function (_Ext_Button) {
  _inheritsLoose(EWCButton, _Ext_Button);

  var _super = _createSuper(EWCButton);

  function EWCButton() {
    var _this;

    _this = _Ext_Button.call(this, [], []) || this;
    _this.xtype = 'button';
    return _this;
  }

  return EWCButton;
}(Ext_Button);

export { EWCButton as default };

try {
  window.customElements.define('ext-button', ElementParser.withParsedCallback(EWCButton));
} catch (e) {
  window.customElements.define('ext-button', EWCButton);
}