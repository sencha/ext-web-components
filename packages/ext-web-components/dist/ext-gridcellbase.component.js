import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base_Component from './Ext/grid/cell/Base';
export var ExtGridcellbaseComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Base_C) {
  _inheritsLoose(ExtGridcellbaseComponent, _Ext_grid_cell_Base_C);

  function ExtGridcellbaseComponent() {
    return _Ext_grid_cell_Base_C.call(this, '', '', {}, '') || this;
  }

  return ExtGridcellbaseComponent;
}(Ext_grid_cell_Base_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridcellbase', ExtGridcellbaseComponent);
  });
})();