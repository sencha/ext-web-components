import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtD3_svgComponent =
/*#__PURE__*/
function (_Ext_d3_svg_Svg) {
  _inheritsLoose(ExtD3_svgComponent, _Ext_d3_svg_Svg);

  function ExtD3_svgComponent() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3-svg';
    return _this;
  }

  return ExtD3_svgComponent;
}(Ext_d3_svg_Svg); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-svg', ExtD3_svgComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-svg', HTMLParsedElement.withParsedCallback(ExtD3_svgComponent));