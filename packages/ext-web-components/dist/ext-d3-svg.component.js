import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg_Component from './Ext/d3/svg/Svg';
export var ExtD3_svgComponent =
/*#__PURE__*/
function (_Ext_d3_svg_Svg_Compo) {
  _inheritsLoose(ExtD3_svgComponent, _Ext_d3_svg_Svg_Compo);

  function ExtD3_svgComponent() {
    return _Ext_d3_svg_Svg_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtD3_svgComponent;
}(Ext_d3_svg_Svg_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-svg', ExtD3_svgComponent);
  });
})();