import Ext_grid_Column from './Ext/grid/Column.js';
import ElementParser from './ElementParser.js';

export default class EWCGridcolumn extends Ext_grid_Column {
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
