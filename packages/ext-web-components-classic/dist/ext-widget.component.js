import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './common/ElementParser.js';

var EWCWidget = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(EWCWidget, _Ext_Gadget);

  var _super = _createSuper(EWCWidget);

  function EWCWidget() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'widget';
    return _this;
  }

  return EWCWidget;
}(Ext_Gadget);

export { EWCWidget as default };

try {
  if (window.customElements.get('ext-widget') == undefined) {
    window.customElements.define('ext-widget', ElementParser.withParsedCallback(EWCWidget));
  }
} catch (e) {
  if (window.customElements.get('ext-widget') == undefined) {
    window.customElements.define('ext-widget', EWCWidget);
  }
}