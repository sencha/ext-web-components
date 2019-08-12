import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_RowNumberer_Component from './Ext/grid/cell/RowNumberer';
export var ExtRownumberercellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_RowNum) {
  _inheritsLoose(ExtRownumberercellComponent, _Ext_grid_cell_RowNum);

  function ExtRownumberercellComponent() {
    return _Ext_grid_cell_RowNum.call(this, '', '', {}, '') || this;
  }

  return ExtRownumberercellComponent;
}(Ext_grid_cell_RowNumberer_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-rownumberercell', ExtRownumberercellComponent);
  });
})();