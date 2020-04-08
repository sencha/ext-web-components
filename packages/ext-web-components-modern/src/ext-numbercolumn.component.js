import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import ElementParser from './common/ElementParser.js';

export default class EWCNumbercolumn extends Ext_grid_column_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numbercolumn';
  }
}
try {
  if (window.customElements.get('ext-numbercolumn') == undefined) {
    window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-numbercolumn') == undefined) {
    window.customElements.define('ext-numbercolumn', EWCNumbercolumn);
  }
}
