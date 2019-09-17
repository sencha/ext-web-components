import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Indicator_Component from './Ext/Indicator';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtIndicatorComponent =
/*#__PURE__*/
function (_Ext_Indicator_Compon) {
  _inheritsLoose(ExtIndicatorComponent, _Ext_Indicator_Compon);

  function ExtIndicatorComponent() {
    var _this;

    _this = _Ext_Indicator_Compon.call(this) || this;
    _this.xtype = 'indicator';
    return _this;
  }

  return ExtIndicatorComponent;
}(Ext_Indicator_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indicator', ExtIndicatorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(ExtIndicatorComponent));