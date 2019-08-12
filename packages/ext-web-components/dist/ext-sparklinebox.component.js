import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Box_Component from './Ext/sparkline/Box';
export var ExtSparklineboxComponent =
/*#__PURE__*/
function (_Ext_sparkline_Box_Co) {
  _inheritsLoose(ExtSparklineboxComponent, _Ext_sparkline_Box_Co);

  function ExtSparklineboxComponent() {
    return _Ext_sparkline_Box_Co.call(this, '', '', {}, '') || this;
  }

  return ExtSparklineboxComponent;
}(Ext_sparkline_Box_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklinebox', ExtSparklineboxComponent);
  });
})();