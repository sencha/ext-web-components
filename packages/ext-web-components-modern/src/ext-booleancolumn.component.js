import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCBooleancolumn extends Ext_grid_column_Boolean {
  constructor() {
    super ([], []);
    this.xtype = 'booleancolumn';
  }
}
try {
  window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));
}
catch(e) {
  window.customElements.define('ext-booleancolumn', EWCBooleancolumn);
}
