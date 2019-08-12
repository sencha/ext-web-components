import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_HeaderContainer_Component from './Ext/grid/HeaderContainer';
export var ExtHeadercontainerComponent =
/*#__PURE__*/
function (_Ext_grid_HeaderConta) {
  _inheritsLoose(ExtHeadercontainerComponent, _Ext_grid_HeaderConta);

  function ExtHeadercontainerComponent() {
    return _Ext_grid_HeaderConta.call(this, '', '', {}, '') || this;
  }

  return ExtHeadercontainerComponent;
}(Ext_grid_HeaderContainer_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-headercontainer', ExtHeadercontainerComponent);
  });
})();