import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_TriState_Component from './Ext/sparkline/TriState';
export var ExtSparklinetristateComponent =
/*#__PURE__*/
function (_Ext_sparkline_TriSta) {
  _inheritsLoose(ExtSparklinetristateComponent, _Ext_sparkline_TriSta);

  function ExtSparklinetristateComponent() {
    return _Ext_sparkline_TriSta.call(this, '', '', {}, '') || this;
  }

  return ExtSparklinetristateComponent;
}(Ext_sparkline_TriState_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sparklinetristate', ExtSparklinetristateComponent);
  });
})();