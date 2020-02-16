import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPivotgridcell extends Ext_pivot_cell_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgridcell';
  }
}
try {
  window.customElements.define('ext-pivotgridcell', ElementParser.withParsedCallback(EWCPivotgridcell));
}
catch(e) {
  window.customElements.define('ext-pivotgridcell', EWCPivotgridcell);
}
