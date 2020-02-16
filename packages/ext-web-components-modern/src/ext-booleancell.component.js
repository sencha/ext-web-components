import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCBooleancell extends Ext_grid_cell_Boolean {
  constructor() {
    super ([], []);
    this.xtype = 'booleancell';
  }
}
try {
  window.customElements.define('ext-booleancell', ElementParser.withParsedCallback(EWCBooleancell));
}
catch(e) {
  window.customElements.define('ext-booleancell', EWCBooleancell);
}
