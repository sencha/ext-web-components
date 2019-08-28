import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Selection_Component from './Ext/grid/column/Selection';
export var ExtSelectioncolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Sele) {
  _inheritsLoose(ExtSelectioncolumnComponent, _Ext_grid_column_Sele);

  function ExtSelectioncolumnComponent() {
    return _Ext_grid_column_Sele.call(this, '', '', {}, '') || this;
  }

  return ExtSelectioncolumnComponent;
}(Ext_grid_column_Selection_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-selectioncolumn', ExtSelectioncolumnComponent);
  });
})();