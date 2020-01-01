import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import ElementParser from './ElementParser.js';

export default class EWCNumbercolumn extends Ext_grid_column_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numbercolumn';
  }
}
window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));
