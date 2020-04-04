import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_viewport_Default from './Ext/viewport/Default.js';
import ElementParser from './common/ElementParser.js';

var EWCViewport = /*#__PURE__*/function (_Ext_viewport_Default) {
  _inheritsLoose(EWCViewport, _Ext_viewport_Default);

  var _super = _createSuper(EWCViewport);

  function EWCViewport() {
    var _this;

    _this = _Ext_viewport_Default.call(this, [], []) || this;
    _this.xtype = 'viewport';
    return _this;
  }

  return EWCViewport;
}(Ext_viewport_Default);

export { EWCViewport as default };

try {
  if (window.customElements.get('ext-viewport') == undefined) {
    window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
  }
} catch (e) {
  if (window.customElements.get('ext-viewport') == undefined) {
    window.customElements.define('ext-viewport', EWCViewport);
  }
}