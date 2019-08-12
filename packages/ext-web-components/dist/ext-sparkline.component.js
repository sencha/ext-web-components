import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base_Component from './Ext/sparkline/Base';
export var ExtSparklineComponent =
/*#__PURE__*/
function (_Ext_sparkline_Base_C) {
  _inheritsLoose(ExtSparklineComponent, _Ext_sparkline_Base_C);

  function ExtSparklineComponent() {
    return _Ext_sparkline_Base_C.call(this, '', '', {}, '') || this;
  }

  return ExtSparklineComponent;
}(Ext_sparkline_Base_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparkline', ExtSparklineComponent);
  });
})();