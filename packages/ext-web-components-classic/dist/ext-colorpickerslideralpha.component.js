import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_SliderAlpha from './Ext/ux/colorpick/SliderAlpha.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorpickerslideralpha = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslideralpha, _Ext_ux_colorpick_Sli);

  var _super = _createSuper(EWCColorpickerslideralpha);

  function EWCColorpickerslideralpha() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickerslideralpha';
    return _this;
  }

  return EWCColorpickerslideralpha;
}(Ext_ux_colorpick_SliderAlpha);

export { EWCColorpickerslideralpha as default };

try {
  window.customElements.define('ext-colorpickerslideralpha', ElementParser.withParsedCallback(EWCColorpickerslideralpha));
} catch (e) {
  window.customElements.define('ext-colorpickerslideralpha', EWCColorpickerslideralpha);
}