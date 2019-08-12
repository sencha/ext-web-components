import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Cell_Component from './Ext/pivot/cell/Cell';
export var ExtPivotgridcellComponent =
/*#__PURE__*/
function (_Ext_pivot_cell_Cell_) {
  _inheritsLoose(ExtPivotgridcellComponent, _Ext_pivot_cell_Cell_);

  function ExtPivotgridcellComponent() {
    return _Ext_pivot_cell_Cell_.call(this, '', '', {}, '') || this;
  }

  return ExtPivotgridcellComponent;
}(Ext_pivot_cell_Cell_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotgridcell', ExtPivotgridcellComponent);
  });
})();