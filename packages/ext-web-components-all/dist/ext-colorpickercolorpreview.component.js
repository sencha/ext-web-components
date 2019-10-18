import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtColorpickercolorpreviewComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(ExtColorpickercolorpreviewComponent, _Ext_ux_colorpick_Col);

  function ExtColorpickercolorpreviewComponent() {
    var _this;

    _this = _Ext_ux_colorpick_Col.call(this, [], []) || this;
    _this.xtype = 'colorpickercolorpreview';
    return _this;
  }

  return ExtColorpickercolorpreviewComponent;
}(Ext_ux_colorpick_ColorPreview); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorpickercolorpreview', ExtColorpickercolorpreviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-colorpickercolorpreview', HTMLParsedElement.withParsedCallback(ExtColorpickercolorpreviewComponent));