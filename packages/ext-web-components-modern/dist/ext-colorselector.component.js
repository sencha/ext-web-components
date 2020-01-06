import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import ElementParser from './ElementParser.js';

var EWCColorselector =
/*#__PURE__*/
function (_Ext_ux_colorpick_Sel) {
  _inheritsLoose(EWCColorselector, _Ext_ux_colorpick_Sel);

  function EWCColorselector() {
    var _this;

    _this = _Ext_ux_colorpick_Sel.call(this, [], []) || this;
    _this.xtype = 'colorselector';
    return _this;
  }

  return EWCColorselector;
}(Ext_ux_colorpick_Selector);

export { EWCColorselector as default };
window.customElements.define('ext-colorselector', ElementParser.withParsedCallback(EWCColorselector));