import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg_Component from './Ext/d3/svg/Svg';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3Component =
/*#__PURE__*/
function (_Ext_d3_svg_Svg_Compo) {
  _inheritsLoose(ExtD3Component, _Ext_d3_svg_Svg_Compo);

  function ExtD3Component() {
    var _this;

    _this = _Ext_d3_svg_Svg_Compo.call(this, {}, [], []) || this;
    _this.xtype = 'd3';
    return _this;
  }

  return ExtD3Component;
}(Ext_d3_svg_Svg_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3', ExtD3Component);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3', HTMLParsedElement.withParsedCallback(ExtD3Component));