import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import ElementParser from './ElementParser.js';

export default class EWCBooleancolumn extends Ext_grid_column_Boolean {
  constructor() {
    super ([], []);
    this.xtype = 'booleancolumn';
  }
}
window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));
