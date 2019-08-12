import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid_Component from './Ext/grid/Grid';
export var ExtGridComponent =
/*#__PURE__*/
function (_Ext_grid_Grid_Compon) {
  _inheritsLoose(ExtGridComponent, _Ext_grid_Grid_Compon);

  function ExtGridComponent() {
    return _Ext_grid_Grid_Compon.call(this, '', '', {}, '') || this;
  }

  return ExtGridComponent;
}(Ext_grid_Grid_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-grid', ExtGridComponent);
  });
})();