import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from './Ext/sparkline/Base';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklineComponent =
/*#__PURE__*/
function (_Ext_sparkline_Base) {
  _inheritsLoose(ExtSparklineComponent, _Ext_sparkline_Base);

  function ExtSparklineComponent() {
    var _this;

    _this = _Ext_sparkline_Base.call(this, [], []) || this;
    _this.xtype = 'sparkline';
    return _this;
  }

  return ExtSparklineComponent;
}(Ext_sparkline_Base); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparkline', ExtSparklineComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(ExtSparklineComponent));