import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_window_Toast from './Ext/window/Toast.js';
import ElementParser from './common/ElementParser.js';

var EWCToast = /*#__PURE__*/function (_Ext_window_Toast) {
  _inheritsLoose(EWCToast, _Ext_window_Toast);

  var _super = _createSuper(EWCToast);

  function EWCToast() {
    var _this;

    _this = _Ext_window_Toast.call(this, [], []) || this;
    _this.xtype = 'toast';
    return _this;
  }

  return EWCToast;
}(Ext_window_Toast);

export { EWCToast as default };

try {
  if (window.customElements.get('ext-toast') == undefined) {
    window.customElements.define('ext-toast', ElementParser.withParsedCallback(EWCToast));
  }
} catch (e) {
  if (window.customElements.get('ext-toast') == undefined) {
    window.customElements.define('ext-toast', EWCToast);
  }
}