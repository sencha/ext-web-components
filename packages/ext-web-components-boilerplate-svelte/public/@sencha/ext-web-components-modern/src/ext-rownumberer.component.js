import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import ElementParser from './ElementParser.js';

export default class EWCRownumberer extends Ext_grid_column_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberer';
  }
}
try {
  window.customElements.define('ext-rownumberer', ElementParser.withParsedCallback(EWCRownumberer));
}
catch(e) {
  window.customElements.define('ext-rownumberer', EWCRownumberer);
}
