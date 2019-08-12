import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_LockedGridRegion_Component from './Ext/grid/LockedGridRegion';
export var ExtLockedgridregionComponent =
/*#__PURE__*/
function (_Ext_grid_LockedGridR) {
  _inheritsLoose(ExtLockedgridregionComponent, _Ext_grid_LockedGridR);

  function ExtLockedgridregionComponent() {
    return _Ext_grid_LockedGridR.call(this, '', '', {}, '') || this;
  }

  return ExtLockedgridregionComponent;
}(Ext_grid_LockedGridRegion_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-lockedgridregion', ExtLockedgridregionComponent);
  });
})();