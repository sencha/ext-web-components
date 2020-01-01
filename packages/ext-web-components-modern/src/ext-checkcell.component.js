import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import ElementParser from './ElementParser.js';

export default class EWCCheckcell extends Ext_grid_cell_Check {
  constructor() {
    super ([], []);
    this.xtype = 'checkcell';
  }
}
window.customElements.define('ext-checkcell', ElementParser.withParsedCallback(EWCCheckcell));
