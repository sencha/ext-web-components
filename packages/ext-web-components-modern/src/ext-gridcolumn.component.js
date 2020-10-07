import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridcolumn extends Ext_grid_column_Template {
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
