import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotgridcell extends Ext_pivot_cell_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgridcell';
  }
}
try {
  if (window.customElements.get('ext-pivotgridcell') == undefined) {
    window.customElements.define('ext-pivotgridcell', ElementParser.withParsedCallback(EWCPivotgridcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotgridcell') == undefined) {
    window.customElements.define('ext-pivotgridcell', EWCPivotgridcell);
  }
}
