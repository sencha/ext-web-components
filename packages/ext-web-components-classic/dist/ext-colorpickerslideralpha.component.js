import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_SliderAlpha from './Ext/ux/colorpick/SliderAlpha.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorpickerslideralpha = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslideralpha, _Ext_ux_colorpick_Sli);

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