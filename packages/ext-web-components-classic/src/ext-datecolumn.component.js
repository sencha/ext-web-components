import Ext_grid_DateColumn from './Ext/grid/DateColumn.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDatecolumn extends Ext_grid_DateColumn {
  constructor() {
    super ([], []);
    this.xtype = 'datecolumn';
  }
}
try {
  window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));
}
catch(e) {
  window.customElements.define('ext-datecolumn', EWCDatecolumn);
}
