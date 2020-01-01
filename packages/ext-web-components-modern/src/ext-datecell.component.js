import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatecell extends Ext_grid_cell_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datecell';
  }
}
window.customElements.define('ext-datecell', ElementParser.withParsedCallback(EWCDatecell));
