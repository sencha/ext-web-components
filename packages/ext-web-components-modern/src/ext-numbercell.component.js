import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import ElementParser from './ElementParser.js';

export default class EWCNumbercell extends Ext_grid_cell_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numbercell';
  }
}
window.customElements.define('ext-numbercell', ElementParser.withParsedCallback(EWCNumbercell));
