import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_slider_Toggle from './Ext/slider/Toggle.js';
import ElementParser from './runtime/ElementParser.js';

var EWCToggleslider = /*#__PURE__*/function (_Ext_slider_Toggle) {
  _inheritsLoose(EWCToggleslider, _Ext_slider_Toggle);

  var _super = _createSuper(EWCToggleslider);

  function EWCToggleslider() {
    var _this;

    _this = _Ext_slider_Toggle.call(this, [], []) || this;
    _this.xtype = 'toggleslider';
    return _this;
  }

  return EWCToggleslider;
}(Ext_slider_Toggle);

export { EWCToggleslider as default };

try {
  window.customElements.define('ext-toggleslider', ElementParser.withParsedCallback(EWCToggleslider));
} catch (e) {
  window.customElements.define('ext-toggleslider', EWCToggleslider);
}