import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_ColorMap from './Ext/ux/colorpick/ColorMap.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorpickercolormap = /*#__PURE__*/function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(EWCColorpickercolormap, _Ext_ux_colorpick_Col);

  var _super = _createSuper(EWCColorpickercolormap);

  function EWCColorpickercolormap() {
    var _this;

    _this = _Ext_ux_colorpick_Col.call(this, [], []) || this;
    _this.xtype = 'colorpickercolormap';
    return _this;
  }

  return EWCColorpickercolormap;
}(Ext_ux_colorpick_ColorMap);

export { EWCColorpickercolormap as default };

try {
  window.customElements.define('ext-colorpickercolormap', ElementParser.withParsedCallback(EWCColorpickercolormap));
} catch (e) {
  window.customElements.define('ext-colorpickercolormap', EWCColorpickercolormap);
}