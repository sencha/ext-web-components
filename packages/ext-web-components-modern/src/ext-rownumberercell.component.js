import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import ElementParser from './ElementParser.js';

export default class EWCRownumberercell extends Ext_grid_cell_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberercell';
  }
}
window.customElements.define('ext-rownumberercell', ElementParser.withParsedCallback(EWCRownumberercell));
