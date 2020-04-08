import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatecolumn extends Ext_grid_column_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datecolumn';
  }
}
try {
  if (window.customElements.get('ext-datecolumn') == undefined) {
    window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-datecolumn') == undefined) {
    window.customElements.define('ext-datecolumn', EWCDatecolumn);
  }
}
