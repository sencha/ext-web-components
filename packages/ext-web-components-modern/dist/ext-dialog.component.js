import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_window_Window from './Ext/window/Window.js';
import ElementParser from './common/ElementParser.js';

var EWCDialog = /*#__PURE__*/function (_Ext_window_Window) {
  _inheritsLoose(EWCDialog, _Ext_window_Window);

  var _super = _createSuper(EWCDialog);

  function EWCDialog() {
    var _this;

    _this = _Ext_window_Window.call(this, [], []) || this;
    _this.xtype = 'dialog';
    return _this;
  }

  return EWCDialog;
}(Ext_window_Window);

export { EWCDialog as default };

try {
  if (window.customElements.get('ext-dialog') == undefined) {
    window.customElements.define('ext-dialog', ElementParser.withParsedCallback(EWCDialog));
  }
} catch (e) {
  if (window.customElements.get('ext-dialog') == undefined) {
    window.customElements.define('ext-dialog', EWCDialog);
  }
}