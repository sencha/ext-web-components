import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotgridgroupcell = /*#__PURE__*/function (_Ext_pivot_cell_Group) {
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

try {
  window.customElements.define('ext-pivotgridgroupcell', ElementParser.withParsedCallback(EWCPivotgridgroupcell));
} catch (e) {
  window.customElements.define('ext-pivotgridgroupcell', EWCPivotgridgroupcell);
}