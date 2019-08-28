import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Group_Component from './Ext/pivot/cell/Group';
export var ExtPivotgridgroupcellComponent =
/*#__PURE__*/
function (_Ext_pivot_cell_Group) {
  _inheritsLoose(ExtPivotgridgroupcellComponent, _Ext_pivot_cell_Group);

  function ExtPivotgridgroupcellComponent() {
    return _Ext_pivot_cell_Group.call(this, '', '', {}, '') || this;
  }

  return ExtPivotgridgroupcellComponent;
}(Ext_pivot_cell_Group_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotgridgroupcell', ExtPivotgridgroupcellComponent);
  });
})();