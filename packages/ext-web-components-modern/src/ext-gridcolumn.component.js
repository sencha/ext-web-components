import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGridcolumn extends Ext_grid_column_Template {
  constructor() {
    super ([], []);
    this.xtype = 'gridcolumn';
  }
}
try {
  window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
}
catch(e) {
  window.customElements.define('ext-gridcolumn', EWCGridcolumn);
}
