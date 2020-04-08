import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_SliderAlpha from './Ext/ux/colorpick/SliderAlpha.js';
import ElementParser from './common/ElementParser.js';

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
  if (window.customElements.get('ext-colorpickerslideralpha') == undefined) {
    window.customElements.define('ext-colorpickerslideralpha', ElementParser.withParsedCallback(EWCColorpickerslideralpha));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickerslideralpha') == undefined) {
    window.customElements.define('ext-colorpickerslideralpha', EWCColorpickerslideralpha);
  }
}