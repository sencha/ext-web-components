import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSelectioncolumn extends Ext_grid_column_Selection {
  constructor() {
    super ([], []);
    this.xtype = 'selectioncolumn';
  }
}
try {
  window.customElements.define('ext-selectioncolumn', ElementParser.withParsedCallback(EWCSelectioncolumn));
}
catch(e) {
  window.customElements.define('ext-selectioncolumn', EWCSelectioncolumn);
}
