import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_colorpick_ColorMap from '@sencha/ext-runtime-base/dist/./Ext/ux/colorpick/ColorMap.js';
import Ext_ux_colorpick_ColorMap from './Ext/ux/colorpick/ColorMap.js';
import ElementParser from './ElementParser.js';

var EWCColorpickercolormap =
/*#__PURE__*/
function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(EWCColorpickercolormap, _Ext_ux_colorpick_Col);

  function EWCColorpickercolormap() {
    var _this;

    _this = _Ext_ux_colorpick_Col.call(this, [], []) || this;
    _this.xtype = 'colorpickercolormap';
    return _this;
  }

  return EWCColorpickercolormap;
}(Ext_ux_colorpick_ColorMap);

export { EWCColorpickercolormap as default };
window.customElements.define('ext-colorpickercolormap', ElementParser.withParsedCallback(EWCColorpickercolormap));