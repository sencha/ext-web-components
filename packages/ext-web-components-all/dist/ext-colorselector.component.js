import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Selector_Component from './Ext/ux/colorpick/Selector';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtColorselectorComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_Sel) {
  _inheritsLoose(ExtColorselectorComponent, _Ext_ux_colorpick_Sel);

  function ExtColorselectorComponent() {
    var _this;

    _this = _Ext_ux_colorpick_Sel.call(this) || this;
    _this.xtype = 'colorselector';
    return _this;
  }

  return ExtColorselectorComponent;
}(Ext_ux_colorpick_Selector_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorselector', ExtColorselectorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-colorselector', HTMLParsedElement.withParsedCallback(ExtColorselectorComponent));