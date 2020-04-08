import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Slider from './Ext/ux/colorpick/Slider.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpickerslider = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslider, _Ext_ux_colorpick_Sli);

  function EWCColorpickerslider() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickerslider';
    return _this;
  }

  return EWCColorpickerslider;
}(Ext_ux_colorpick_Slider);

export { EWCColorpickerslider as default };

try {
  if (window.customElements.get('ext-colorpickerslider') == undefined) {
    window.customElements.define('ext-colorpickerslider', ElementParser.withParsedCallback(EWCColorpickerslider));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickerslider') == undefined) {
    window.customElements.define('ext-colorpickerslider', EWCColorpickerslider);
  }
}