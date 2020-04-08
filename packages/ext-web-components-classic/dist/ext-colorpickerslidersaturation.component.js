import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_SliderSaturation from './Ext/ux/colorpick/SliderSaturation.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpickerslidersaturation = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslidersaturation, _Ext_ux_colorpick_Sli);

  function EWCColorpickerslidersaturation() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickerslidersaturation';
    return _this;
  }

  return EWCColorpickerslidersaturation;
}(Ext_ux_colorpick_SliderSaturation);

export { EWCColorpickerslidersaturation as default };

try {
  if (window.customElements.get('ext-colorpickerslidersaturation') == undefined) {
    window.customElements.define('ext-colorpickerslidersaturation', ElementParser.withParsedCallback(EWCColorpickerslidersaturation));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickerslidersaturation') == undefined) {
    window.customElements.define('ext-colorpickerslidersaturation', EWCColorpickerslidersaturation);
  }
}