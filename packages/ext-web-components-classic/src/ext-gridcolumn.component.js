import Ext_grid_Column from './Ext/grid/Column.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridcolumn extends Ext_grid_Column {
  constructor() {
    super ([], []);
    this.xtype = 'gridcolumn';
  }
}
try {
  if (window.customElements.get('ext-gridcolumn') == undefined) {
    window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridcolumn') == undefined) {
    window.customElements.define('ext-gridcolumn', EWCGridcolumn);
  }
}
