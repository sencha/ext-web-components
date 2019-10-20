import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtColorpickercolorpreview =
/*#__PURE__*/
function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(ExtColorpickercolorpreview, _Ext_ux_colorpick_Col);

  function ExtColorpickercolorpreview() {
    var _this;

    _this = _Ext_ux_colorpick_Col.call(this, [], []) || this;
    _this.xtype = 'colorpickercolorpreview';
    return _this;
  }

  return ExtColorpickercolorpreview;
}(Ext_ux_colorpick_ColorPreview); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-colorpickercolorpreview', ExtColorpickercolorpreview);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtColorpickercolorpreview as default };
window.customElements.define('ext-colorpickercolorpreview', HTMLParsedElement.withParsedCallback(ExtColorpickercolorpreview)); //export default reactify(ExtColorpickercolorpreview);