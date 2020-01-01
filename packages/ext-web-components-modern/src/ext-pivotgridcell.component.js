import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotgridcell extends Ext_pivot_cell_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgridcell';
  }
}
window.customElements.define('ext-pivotgridcell', ElementParser.withParsedCallback(EWCPivotgridcell));
