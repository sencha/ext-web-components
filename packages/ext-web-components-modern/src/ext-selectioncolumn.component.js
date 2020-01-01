import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import ElementParser from './ElementParser.js';

export default class EWCSelectioncolumn extends Ext_grid_column_Selection {
  constructor() {
    super ([], []);
    this.xtype = 'selectioncolumn';
  }
}
window.customElements.define('ext-selectioncolumn', ElementParser.withParsedCallback(EWCSelectioncolumn));
