import Ext_grid_BooleanColumn from './Ext/grid/BooleanColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCBooleancolumn extends Ext_grid_BooleanColumn {
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
