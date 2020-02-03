import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import ElementParser from './ElementParser.js';

export default class EWCRownumberercell extends Ext_grid_cell_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberercell';
  }
}
try {
  window.customElements.define('ext-rownumberercell', ElementParser.withParsedCallback(EWCRownumberercell));
}
catch(e) {
  window.customElements.define('ext-rownumberercell', EWCRownumberercell);
}
