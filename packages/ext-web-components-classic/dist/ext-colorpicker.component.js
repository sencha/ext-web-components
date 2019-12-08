import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ColorPalette from '@sencha/ext-runtime-base/dist/./Ext/ColorPalette.js';
import Ext_ColorPalette from './Ext/ColorPalette.js';
import ElementParser from './ElementParser.js';

var EWCColorpicker =
/*#__PURE__*/
function (_Ext_ColorPalette) {
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
window.customElements.define('ext-colorpicker', ElementParser.withParsedCallback(EWCColorpicker));