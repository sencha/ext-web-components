import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtColorselector =
/*#__PURE__*/
function (_Ext_ux_colorpick_Sel) {
  _inheritsLoose(ExtColorselector, _Ext_ux_colorpick_Sel);

  function ExtColorselector() {
    var _this;

    _this = _Ext_ux_colorpick_Sel.call(this, [], []) || this;
    _this.xtype = 'colorselector';
    return _this;
  }

  return ExtColorselector;
}(Ext_ux_colorpick_Selector);

export { ExtColorselector as default };
window.customElements.define('ext-colorselector', HTMLParsedElement.withParsedCallback(ExtColorselector));