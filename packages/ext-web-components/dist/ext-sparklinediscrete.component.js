import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Discrete_Component from './Ext/sparkline/Discrete';
export var ExtSparklinediscreteComponent =
/*#__PURE__*/
function (_Ext_sparkline_Discre) {
  _inheritsLoose(ExtSparklinediscreteComponent, _Ext_sparkline_Discre);

  function ExtSparklinediscreteComponent() {
    return _Ext_sparkline_Discre.call(this, '', '', {}, '') || this;
  }

  return ExtSparklinediscreteComponent;
}(Ext_sparkline_Discrete_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklinediscrete', ExtSparklinediscreteComponent);
  });
})();