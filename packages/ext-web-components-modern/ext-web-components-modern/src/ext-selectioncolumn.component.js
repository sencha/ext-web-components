import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSelectioncolumn extends Ext_grid_column_Selection {
  constructor() {
    super ([], []);
    this.xtype = 'selectioncolumn';
  }
}
try {
  if (window.customElements.get('ext-selectioncolumn') == undefined) {
    window.customElements.define('ext-selectioncolumn', ElementParser.withParsedCallback(EWCSelectioncolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-selectioncolumn') == undefined) {
    window.customElements.define('ext-selectioncolumn', EWCSelectioncolumn);
  }
}
