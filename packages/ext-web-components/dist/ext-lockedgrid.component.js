import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGrid_Component from './Ext/grid/LockedGrid';
export var ExtLockedgridComponent =
/*#__PURE__*/
function (_Ext_grid_LockedGrid_) {
  _inheritsLoose(ExtLockedgridComponent, _Ext_grid_LockedGrid_);

  function ExtLockedgridComponent() {
    return _Ext_grid_LockedGrid_.call(this, '', '', {}, '') || this;
  }

  return ExtLockedgridComponent;
}(Ext_grid_LockedGrid_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-lockedgrid', ExtLockedgridComponent);
  });
})();