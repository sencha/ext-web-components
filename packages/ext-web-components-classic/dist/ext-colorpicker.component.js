import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ColorPalette from './Ext/ColorPalette.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpicker = /*#__PURE__*/function (_Ext_ColorPalette) {
  _inheritsLoose(EWCColorpicker, _Ext_ColorPalette);

  var _super = _createSuper(EWCColorpicker);

  function EWCColorpicker() {
    var _this;

    _this = _Ext_ColorPalette.call(this, [], []) || this;
    _this.xtype = 'colorpicker';
    return _this;
  }

  return EWCColorpicker;
}(Ext_ColorPalette);

export { EWCColorpicker as default };

try {
  if (window.customElements.get('ext-colorpicker') == undefined) {
    window.customElements.define('ext-colorpicker', ElementParser.withParsedCallback(EWCColorpicker));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpicker') == undefined) {
    window.customElements.define('ext-colorpicker', EWCColorpicker);
  }
}