import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_ColorPreview_Component from './Ext/ux/colorpick/ColorPreview';
export var ExtColorpickercolorpreviewComponent =
/*#__PURE__*/
function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(ExtColorpickercolorpreviewComponent, _Ext_ux_colorpick_Col);

  function ExtColorpickercolorpreviewComponent() {
    return _Ext_ux_colorpick_Col.call(this, '', '', {}, '') || this;
  }

  return ExtColorpickercolorpreviewComponent;
}(Ext_ux_colorpick_ColorPreview_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-colorpickercolorpreview', ExtColorpickercolorpreviewComponent);
  });
})();