import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Selector_Component from './Ext/ux/colorpick/Selector';
export var ExtColorselectorComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_Sel) {
  _inheritsLoose(ExtColorselectorComponent, _Ext_ux_colorpick_Sel);

  function ExtColorselectorComponent() {
    return _Ext_ux_colorpick_Sel.call(this, '', '', {}, '') || this;
  }

  return ExtColorselectorComponent;
}(Ext_ux_colorpick_Selector_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-colorselector', ExtColorselectorComponent);
  });
})();