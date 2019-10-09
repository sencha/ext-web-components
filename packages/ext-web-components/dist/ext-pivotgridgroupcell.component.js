import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Group from './Ext/pivot/cell/Group';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotgridgroupcellComponent =
/*#__PURE__*/
function (_Ext_pivot_cell_Group) {
  _inheritsLoose(ExtPivotgridgroupcellComponent, _Ext_pivot_cell_Group);

  function ExtPivotgridgroupcellComponent() {
    var _this;

    _this = _Ext_pivot_cell_Group.call(this, [], []) || this;
    _this.xtype = 'pivotgridgroupcell';
    return _this;
  }

  return ExtPivotgridgroupcellComponent;
}(Ext_pivot_cell_Group); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridgroupcell', ExtPivotgridgroupcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotgridgroupcell', HTMLParsedElement.withParsedCallback(ExtPivotgridgroupcellComponent));