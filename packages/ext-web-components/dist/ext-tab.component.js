import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Tab_Component from './Ext/Tab';
export var ExtTabComponent =
/*#__PURE__*/
function (_Ext_Tab_Component) {
  _inheritsLoose(ExtTabComponent, _Ext_Tab_Component);

  function ExtTabComponent() {
    return _Ext_Tab_Component.call(this, '', '', {}, '') || this;
  }

  return ExtTabComponent;
}(Ext_Tab_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tab', ExtTabComponent);
  });
})();