import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import ElementParser from './ElementParser.js';

export default class EWCBooleancell extends Ext_grid_cell_Boolean {
  constructor() {
    super ([], []);
    this.xtype = 'booleancell';
  }
}
window.customElements.define('ext-booleancell', ElementParser.withParsedCallback(EWCBooleancell));
