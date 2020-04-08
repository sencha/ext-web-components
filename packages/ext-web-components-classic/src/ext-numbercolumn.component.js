import Ext_grid_NumberColumn from './Ext/grid/NumberColumn.js';
import ElementParser from './common/ElementParser.js';

export default class EWCNumbercolumn extends Ext_grid_NumberColumn {
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
