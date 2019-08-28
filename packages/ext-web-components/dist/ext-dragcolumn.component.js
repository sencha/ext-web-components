import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Drag_Component from './Ext/grid/column/Drag';
export var ExtDragcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Drag) {
  _inheritsLoose(ExtDragcolumnComponent, _Ext_grid_column_Drag);

  function ExtDragcolumnComponent() {
    return _Ext_grid_column_Drag.call(this, '', '', {}, '') || this;
  }

  return ExtDragcolumnComponent;
}(Ext_grid_column_Drag_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-dragcolumn', ExtDragcolumnComponent);
  });
})();