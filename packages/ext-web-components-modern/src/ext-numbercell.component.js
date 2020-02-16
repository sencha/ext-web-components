import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCNumbercell extends Ext_grid_cell_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numbercell';
  }
}
try {
  window.customElements.define('ext-numbercell', ElementParser.withParsedCallback(EWCNumbercell));
}
catch(e) {
  window.customElements.define('ext-numbercell', EWCNumbercell);
}
