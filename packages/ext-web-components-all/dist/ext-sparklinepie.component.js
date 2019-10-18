import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Pie from './Ext/sparkline/Pie.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSparklinepieComponent =
/*#__PURE__*/
function (_Ext_sparkline_Pie) {
  _inheritsLoose(ExtSparklinepieComponent, _Ext_sparkline_Pie);

  function ExtSparklinepieComponent() {
    var _this;

    _this = _Ext_sparkline_Pie.call(this, [], []) || this;
    _this.xtype = 'sparklinepie';
    return _this;
  }

  return ExtSparklinepieComponent;
}(Ext_sparkline_Pie); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinepie', ExtSparklinepieComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinepie', HTMLParsedElement.withParsedCallback(ExtSparklinepieComponent));