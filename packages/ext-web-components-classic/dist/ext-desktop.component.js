import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_desktop_Desktop from './Ext/ux/desktop/Desktop.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDesktop = /*#__PURE__*/function (_Ext_ux_desktop_Deskt) {
  _inheritsLoose(EWCDesktop, _Ext_ux_desktop_Deskt);

  var _super = _createSuper(EWCDesktop);

  function EWCDesktop() {
    var _this;

    _this = _Ext_ux_desktop_Deskt.call(this, [], []) || this;
    _this.xtype = 'desktop';
    return _this;
  }

  return EWCDesktop;
}(Ext_ux_desktop_Desktop);

export { EWCDesktop as default };

try {
  window.customElements.define('ext-desktop', ElementParser.withParsedCallback(EWCDesktop));
} catch (e) {
  window.customElements.define('ext-desktop', EWCDesktop);
}