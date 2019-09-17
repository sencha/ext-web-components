import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Discrete_Component from './Ext/sparkline/Discrete';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklinediscreteComponent =
/*#__PURE__*/
function (_Ext_sparkline_Discre) {
  _inheritsLoose(ExtSparklinediscreteComponent, _Ext_sparkline_Discre);

  function ExtSparklinediscreteComponent() {
    var _this;

    _this = _Ext_sparkline_Discre.call(this, {}, [], []) || this;
    _this.xtype = 'sparklinediscrete';
    return _this;
  }

  return ExtSparklinediscreteComponent;
}(Ext_sparkline_Discrete_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinediscrete', ExtSparklinediscreteComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(ExtSparklinediscreteComponent));