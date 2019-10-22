import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_svg =
/*#__PURE__*/
function (_Ext_d3_svg_Svg) {
  _inheritsLoose(ExtD3_svg, _Ext_d3_svg_Svg);

  function ExtD3_svg() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3-svg';
    return _this;
  }

  return ExtD3_svg;
}(Ext_d3_svg_Svg);

export { ExtD3_svg as default };
window.customElements.define('ext-d3-svg', HTMLParsedElement.withParsedCallback(ExtD3_svg));