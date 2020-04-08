import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCheckcolumn extends Ext_grid_column_Check {
  constructor() {
    super ([], []);
    this.xtype = 'checkcolumn';
  }
}
try {
  if (window.customElements.get('ext-checkcolumn') == undefined) {
    window.customElements.define('ext-checkcolumn', ElementParser.withParsedCallback(EWCCheckcolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-checkcolumn') == undefined) {
    window.customElements.define('ext-checkcolumn', EWCCheckcolumn);
  }
}
