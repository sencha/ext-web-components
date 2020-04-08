import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_SliderValue from './Ext/ux/colorpick/SliderValue.js';
import ElementParser from './common/ElementParser.js';

var EWCColorpickerslidervalue = /*#__PURE__*/function (_Ext_ux_colorpick_Sli) {
  _inheritsLoose(EWCColorpickerslidervalue, _Ext_ux_colorpick_Sli);

  function EWCColorpickerslidervalue() {
    var _this;

    _this = _Ext_ux_colorpick_Sli.call(this, [], []) || this;
    _this.xtype = 'colorpickerslidervalue';
    return _this;
  }

  return EWCColorpickerslidervalue;
}(Ext_ux_colorpick_SliderValue);

export { EWCColorpickerslidervalue as default };

try {
  if (window.customElements.get('ext-colorpickerslidervalue') == undefined) {
    window.customElements.define('ext-colorpickerslidervalue', ElementParser.withParsedCallback(EWCColorpickerslidervalue));
  }
} catch (e) {
  if (window.customElements.get('ext-colorpickerslidervalue') == undefined) {
    window.customElements.define('ext-colorpickerslidervalue', EWCColorpickerslidervalue);
  }
}