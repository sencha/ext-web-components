import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Window from './Ext/Window.js';
import ElementParser from './common/ElementParser.js';

var EWCWindow = /*#__PURE__*/function (_Ext_Window) {
  _inheritsLoose(EWCWindow, _Ext_Window);

  var _super = _createSuper(EWCWindow);

  function EWCWindow() {
    var _this;

    _this = _Ext_Window.call(this, [], []) || this;
    _this.xtype = 'window';
    return _this;
  }

  return EWCWindow;
}(Ext_Window);

export { EWCWindow as default };

try {
  if (window.customElements.get('ext-window') == undefined) {
    window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));
  }
} catch (e) {
  if (window.customElements.get('ext-window') == undefined) {
    window.customElements.define('ext-window', EWCWindow);
  }
}