import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Line from './Ext/sparkline/Line.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSparklinelineComponent =
/*#__PURE__*/
function (_Ext_sparkline_Line) {
  _inheritsLoose(ExtSparklinelineComponent, _Ext_sparkline_Line);

  function ExtSparklinelineComponent() {
    var _this;

    _this = _Ext_sparkline_Line.call(this, [], []) || this;
    _this.xtype = 'sparklineline';
    return _this;
  }

  return ExtSparklinelineComponent;
}(Ext_sparkline_Line); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklineline', ExtSparklinelineComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklineline', HTMLParsedElement.withParsedCallback(ExtSparklinelineComponent));