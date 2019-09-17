import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Line_Component from './Ext/sparkline/Line';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklinelineComponent =
/*#__PURE__*/
function (_Ext_sparkline_Line_C) {
  _inheritsLoose(ExtSparklinelineComponent, _Ext_sparkline_Line_C);

  function ExtSparklinelineComponent() {
    var _this;

    _this = _Ext_sparkline_Line_C.call(this) || this;
    _this.xtype = 'sparklineline';
    return _this;
  }

  return ExtSparklinelineComponent;
}(Ext_sparkline_Line_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklineline', ExtSparklinelineComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(ExtSparklinelineComponent));