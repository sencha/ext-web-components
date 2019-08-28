import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Indicator_Component from './Ext/Indicator';
export var ExtIndicatorComponent =
/*#__PURE__*/
function (_Ext_Indicator_Compon) {
  _inheritsLoose(ExtIndicatorComponent, _Ext_Indicator_Compon);

  function ExtIndicatorComponent() {
    return _Ext_Indicator_Compon.call(this, '', '', {}, '') || this;
  }

  return ExtIndicatorComponent;
}(Ext_Indicator_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-indicator', ExtIndicatorComponent);
  });
})();