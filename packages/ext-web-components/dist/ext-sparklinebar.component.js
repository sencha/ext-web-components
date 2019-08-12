import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bar_Component from './Ext/sparkline/Bar';
export var ExtSparklinebarComponent =
/*#__PURE__*/
function (_Ext_sparkline_Bar_Co) {
  _inheritsLoose(ExtSparklinebarComponent, _Ext_sparkline_Bar_Co);

  function ExtSparklinebarComponent() {
    return _Ext_sparkline_Bar_Co.call(this, '', '', {}, '') || this;
  }

  return ExtSparklinebarComponent;
}(Ext_sparkline_Bar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklinebar', ExtSparklinebarComponent);
  });
})();