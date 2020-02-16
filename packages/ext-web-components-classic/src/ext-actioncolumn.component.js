import Ext_grid_ActionColumn from './Ext/grid/ActionColumn.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCActioncolumn extends Ext_grid_ActionColumn {
  constructor() {
    super ([], []);
    this.xtype = 'actioncolumn';
  }
}
try {
  window.customElements.define('ext-actioncolumn', ElementParser.withParsedCallback(EWCActioncolumn));
}
catch(e) {
  window.customElements.define('ext-actioncolumn', EWCActioncolumn);
}
