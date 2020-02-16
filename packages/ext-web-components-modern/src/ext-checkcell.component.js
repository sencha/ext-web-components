import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCheckcell extends Ext_grid_cell_Check {
  constructor() {
    super ([], []);
    this.xtype = 'checkcell';
  }
}
try {
  window.customElements.define('ext-checkcell', ElementParser.withParsedCallback(EWCCheckcell));
}
catch(e) {
  window.customElements.define('ext-checkcell', EWCCheckcell);
}
