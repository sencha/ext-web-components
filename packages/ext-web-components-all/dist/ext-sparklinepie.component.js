import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Pie_Component from './Ext/sparkline/Pie';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklinepieComponent =
/*#__PURE__*/
function (_Ext_sparkline_Pie_Co) {
  _inheritsLoose(ExtSparklinepieComponent, _Ext_sparkline_Pie_Co);

  function ExtSparklinepieComponent() {
    var _this;

    _this = _Ext_sparkline_Pie_Co.call(this) || this;
    _this.xtype = 'sparklinepie';
    return _this;
  }

  return ExtSparklinepieComponent;
}(Ext_sparkline_Pie_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinepie', ExtSparklinepieComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(ExtSparklinepieComponent));