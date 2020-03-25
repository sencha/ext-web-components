import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_SliderSaturation from './Ext/ux/colorpick/SliderSaturation.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorpickerslidersaturation = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslidersaturation, _Ext_ux_colorpick_Sli);

  var _super = _createSuper(EWCColorpickerslidersaturation);

  function EWCColorpickerslidersaturation() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickerslidersaturation';
    return _this;
  }

  return EWCColorpickerslidersaturation;
}(Ext_ux_colorpick_SliderSaturation);

export { EWCColorpickerslidersaturation as default };

try {
  window.customElements.define('ext-colorpickerslidersaturation', ElementParser.withParsedCallback(EWCColorpickerslidersaturation));
} catch (e) {
  window.customElements.define('ext-colorpickerslidersaturation', EWCColorpickerslidersaturation);
}