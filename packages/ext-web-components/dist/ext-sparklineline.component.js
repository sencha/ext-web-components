import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Line_Component from './Ext/sparkline/Line';
export var ExtSparklinelineComponent =
/*#__PURE__*/
function (_Ext_sparkline_Line_C) {
  _inheritsLoose(ExtSparklinelineComponent, _Ext_sparkline_Line_C);

  function ExtSparklinelineComponent() {
    return _Ext_sparkline_Line_C.call(this, '', '', {}, '') || this;
  }

  return ExtSparklinelineComponent;
}(Ext_sparkline_Line_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklineline', ExtSparklinelineComponent);
  });
})();