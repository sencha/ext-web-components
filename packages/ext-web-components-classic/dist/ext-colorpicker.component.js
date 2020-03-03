import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ColorPalette from './Ext/ColorPalette.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorpicker = /*#__PURE__*/function (_Ext_ColorPalette) {
  _inheritsLoose(EWCColorpicker, _Ext_ColorPalette);

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
  window.customElements.define('ext-colorpicker', ElementParser.withParsedCallback(EWCColorpicker));
} catch (e) {
  window.customElements.define('ext-colorpicker', EWCColorpicker);
}