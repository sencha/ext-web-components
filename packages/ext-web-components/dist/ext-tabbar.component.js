import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabBar_Component from './Ext/TabBar';
export var ExtTabbarComponent =
/*#__PURE__*/
function (_Ext_TabBar_Component) {
  _inheritsLoose(ExtTabbarComponent, _Ext_TabBar_Component);

  function ExtTabbarComponent() {
    return _Ext_TabBar_Component.call(this, '', '', {}, '') || this;
  }

  return ExtTabbarComponent;
}(Ext_TabBar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tabbar', ExtTabbarComponent);
  });
})();