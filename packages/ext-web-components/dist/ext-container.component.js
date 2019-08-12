import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_container_Container_Component from './Ext/container/Container';
export var ExtContainerComponent =
/*#__PURE__*/
function (_Ext_container_Contai) {
  _inheritsLoose(ExtContainerComponent, _Ext_container_Contai);

  function ExtContainerComponent() {
    return _Ext_container_Contai.call(this, '', '', {}, '') || this;
  }

  return ExtContainerComponent;
}(Ext_container_Container_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-container', ExtContainerComponent);
  });
})();