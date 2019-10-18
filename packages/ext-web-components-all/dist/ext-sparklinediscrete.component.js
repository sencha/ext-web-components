import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Discrete from './Ext/sparkline/Discrete.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSparklinediscreteComponent =
/*#__PURE__*/
function (_Ext_sparkline_Discre) {
  _inheritsLoose(ExtSparklinediscreteComponent, _Ext_sparkline_Discre);

  function ExtSparklinediscreteComponent() {
    var _this;

    _this = _Ext_sparkline_Discre.call(this, [], []) || this;
    _this.xtype = 'sparklinediscrete';
    return _this;
  }

  return ExtSparklinediscreteComponent;
}(Ext_sparkline_Discrete); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinediscrete', ExtSparklinediscreteComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinediscrete', HTMLParsedElement.withParsedCallback(ExtSparklinediscreteComponent));