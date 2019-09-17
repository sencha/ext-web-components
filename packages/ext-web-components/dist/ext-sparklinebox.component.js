import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Box_Component from './Ext/sparkline/Box';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSparklineboxComponent =
/*#__PURE__*/
function (_Ext_sparkline_Box_Co) {
  _inheritsLoose(ExtSparklineboxComponent, _Ext_sparkline_Box_Co);

  function ExtSparklineboxComponent() {
    var _this;

    _this = _Ext_sparkline_Box_Co.call(this, {}, [], []) || this;
    _this.xtype = 'sparklinebox';
    return _this;
  }

  return ExtSparklineboxComponent;
}(Ext_sparkline_Box_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebox', ExtSparklineboxComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(ExtSparklineboxComponent));