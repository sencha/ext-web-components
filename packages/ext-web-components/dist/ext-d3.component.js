import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg_Component from './Ext/d3/svg/Svg';
export var ExtD3Component =
/*#__PURE__*/
function (_Ext_d3_svg_Svg_Compo) {
  _inheritsLoose(ExtD3Component, _Ext_d3_svg_Svg_Compo);

  function ExtD3Component() {
    return _Ext_d3_svg_Svg_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtD3Component;
}(Ext_d3_svg_Svg_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3', ExtD3Component);
  });
})();