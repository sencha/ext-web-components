import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Tree_Component from './Ext/grid/cell/Tree';
export var ExtTreecellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Tree_C) {
  _inheritsLoose(ExtTreecellComponent, _Ext_grid_cell_Tree_C);

  function ExtTreecellComponent() {
    return _Ext_grid_cell_Tree_C.call(this, '', '', {}, '') || this;
  }

  return ExtTreecellComponent;
}(Ext_grid_cell_Tree_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-treecell', ExtTreecellComponent);
  });
})();