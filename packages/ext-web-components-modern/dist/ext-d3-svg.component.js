import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import ElementParser from './runtime/ElementParser.js';

var EWCD3_svg =
/*#__PURE__*/
function (_Ext_d3_svg_Svg) {
  _inheritsLoose(EWCD3_svg, _Ext_d3_svg_Svg);

  function EWCD3_svg() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3-svg';
    return _this;
  }

  return EWCD3_svg;
}(Ext_d3_svg_Svg);

export { EWCD3_svg as default };

try {
  window.customElements.define('ext-d3-svg', ElementParser.withParsedCallback(EWCD3_svg));
} catch (e) {
  window.customElements.define('ext-d3-svg', EWCD3_svg);
}