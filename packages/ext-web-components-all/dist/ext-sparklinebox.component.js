import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSparklineboxComponent =
/*#__PURE__*/
function (_Ext_sparkline_Box) {
  _inheritsLoose(ExtSparklineboxComponent, _Ext_sparkline_Box);

  function ExtSparklineboxComponent() {
    var _this;

    _this = _Ext_sparkline_Box.call(this, [], []) || this;
    _this.xtype = 'sparklinebox';
    return _this;
  }

  return ExtSparklineboxComponent;
}(Ext_sparkline_Box); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparklinebox', ExtSparklineboxComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(ExtSparklineboxComponent));