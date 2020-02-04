import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotgridgroupcell extends Ext_pivot_cell_Group {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgridgroupcell';
  }
}
try {
  window.customElements.define('ext-pivotgridgroupcell', ElementParser.withParsedCallback(EWCPivotgridgroupcell));
}
catch(e) {
  window.customElements.define('ext-pivotgridgroupcell', EWCPivotgridgroupcell);
}
