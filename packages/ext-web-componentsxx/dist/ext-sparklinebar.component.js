import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Bar from './Ext/sparkline/Bar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklinebarComponent =
/*#__PURE__*/
function (_Ext_sparkline_Bar) {
  _inheritsLoose(ExtSparklinebarComponent, _Ext_sparkline_Bar);

  function ExtSparklinebarComponent() {
    var _this;

    _this = _Ext_sparkline_Bar.call(this, [], []) || this;
    _this.xtype = 'sparklinebar';
    return _this;
  }

  return ExtSparklinebarComponent;
}(Ext_sparkline_Bar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebar', ExtSparklinebarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinebar', HTMLParsedElement.withParsedCallback(ExtSparklinebarComponent));