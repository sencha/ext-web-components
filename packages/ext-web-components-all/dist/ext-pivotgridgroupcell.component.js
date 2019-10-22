import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPivotgridgroupcell =
/*#__PURE__*/
function (_Ext_pivot_cell_Group) {
  _inheritsLoose(ExtPivotgridgroupcell, _Ext_pivot_cell_Group);

  function ExtPivotgridgroupcell() {
    var _this;

    _this = _Ext_pivot_cell_Group.call(this, [], []) || this;
    _this.xtype = 'pivotgridgroupcell';
    return _this;
  }

  return ExtPivotgridgroupcell;
}(Ext_pivot_cell_Group);

export { ExtPivotgridgroupcell as default };
window.customElements.define('ext-pivotgridgroupcell', HTMLParsedElement.withParsedCallback(ExtPivotgridgroupcell));