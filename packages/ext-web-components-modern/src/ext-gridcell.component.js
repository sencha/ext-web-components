import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGridcell extends Ext_grid_cell_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'gridcell';
  }
}
try {
  window.customElements.define('ext-gridcell', ElementParser.withParsedCallback(EWCGridcell));
}
catch(e) {
  window.customElements.define('ext-gridcell', EWCGridcell);
}
