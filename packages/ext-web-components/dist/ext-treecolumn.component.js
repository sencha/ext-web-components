import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Tree_Component from './Ext/grid/column/Tree';
export var ExtTreecolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Tree) {
  _inheritsLoose(ExtTreecolumnComponent, _Ext_grid_column_Tree);

  function ExtTreecolumnComponent() {
    return _Ext_grid_column_Tree.call(this, '', '', {}, '') || this;
  }

  return ExtTreecolumnComponent;
}(Ext_grid_column_Tree_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-treecolumn', ExtTreecolumnComponent);
  });
})();