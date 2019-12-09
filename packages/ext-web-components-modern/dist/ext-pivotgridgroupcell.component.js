import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_pivot_cell_Group from '@sencha/ext-runtime-base/dist/./Ext/pivot/cell/Group.js';
import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import ElementParser from './ElementParser.js';

var EWCPivotgridgroupcell =
/*#__PURE__*/
function (_Ext_pivot_cell_Group) {
  _inheritsLoose(EWCPivotgridgroupcell, _Ext_pivot_cell_Group);

  function EWCPivotgridgroupcell() {
    var _this;

    _this = _Ext_pivot_cell_Group.call(this, [], []) || this;
    _this.xtype = 'pivotgridgroupcell';
    return _this;
  }

  return EWCPivotgridgroupcell;
}(Ext_pivot_cell_Group);

export { EWCPivotgridgroupcell as default };
window.customElements.define('ext-pivotgridgroupcell', ElementParser.withParsedCallback(EWCPivotgridgroupcell));