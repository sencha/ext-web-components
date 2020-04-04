import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridcell extends Ext_grid_cell_Cell {
  constructor() {
    super ([], []);
    this.xtype = 'gridcell';
  }
}
try {
  if (window.customElements.get('ext-gridcell') == undefined) {
    window.customElements.define('ext-gridcell', ElementParser.withParsedCallback(EWCGridcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridcell') == undefined) {
    window.customElements.define('ext-gridcell', EWCGridcell);
  }
}
