import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Pie_Component from './Ext/sparkline/Pie';
export var ExtSparklinepieComponent =
/*#__PURE__*/
function (_Ext_sparkline_Pie_Co) {
  _inheritsLoose(ExtSparklinepieComponent, _Ext_sparkline_Pie_Co);

  function ExtSparklinepieComponent() {
    return _Ext_sparkline_Pie_Co.call(this, '', '', {}, '') || this;
  }

  return ExtSparklinepieComponent;
}(Ext_sparkline_Pie_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklinepie', ExtSparklinepieComponent);
  });
})();