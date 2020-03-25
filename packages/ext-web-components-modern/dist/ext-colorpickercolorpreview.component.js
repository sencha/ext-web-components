import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorpickercolorpreview = /*#__PURE__*/function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(EWCColorpickercolorpreview, _Ext_ux_colorpick_Col);

  var _super = _createSuper(EWCColorpickercolorpreview);

  function EWCColorpickercolorpreview() {
    var _this;

    _this = _Ext_ux_colorpick_Col.call(this, [], []) || this;
    _this.xtype = 'colorpickercolorpreview';
    return _this;
  }

  return EWCColorpickercolorpreview;
}(Ext_ux_colorpick_ColorPreview);

export { EWCColorpickercolorpreview as default };

try {
  window.customElements.define('ext-colorpickercolorpreview', ElementParser.withParsedCallback(EWCColorpickercolorpreview));
} catch (e) {
  window.customElements.define('ext-colorpickercolorpreview', EWCColorpickercolorpreview);
}