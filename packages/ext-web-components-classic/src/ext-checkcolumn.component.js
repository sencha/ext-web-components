import Ext_grid_column_CheckColumn from './Ext/grid/column/CheckColumn.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCheckcolumn extends Ext_grid_column_CheckColumn {
  constructor() {
    super ([], []);
    this.xtype = 'checkcolumn';
  }
}
try {
  window.customElements.define('ext-checkcolumn', ElementParser.withParsedCallback(EWCCheckcolumn));
}
catch(e) {
  window.customElements.define('ext-checkcolumn', EWCCheckcolumn);
}
