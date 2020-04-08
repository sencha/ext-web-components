import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_SliderHue from './Ext/ux/colorpick/SliderHue.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpickersliderhue = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickersliderhue, _Ext_ux_colorpick_Sli);

  function EWCColorpickersliderhue() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickersliderhue';
    return _this;
  }

  return EWCColorpickersliderhue;
}(Ext_ux_colorpick_SliderHue);

export { EWCColorpickersliderhue as default };

try {
  if (window.customElements.get('ext-colorpickersliderhue') == undefined) {
    window.customElements.define('ext-colorpickersliderhue', ElementParser.withParsedCallback(EWCColorpickersliderhue));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickersliderhue') == undefined) {
    window.customElements.define('ext-colorpickersliderhue', EWCColorpickersliderhue);
  }
}