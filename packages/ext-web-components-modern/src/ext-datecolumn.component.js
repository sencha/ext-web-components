import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatecolumn extends Ext_grid_column_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datecolumn';
  }
}
window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));
