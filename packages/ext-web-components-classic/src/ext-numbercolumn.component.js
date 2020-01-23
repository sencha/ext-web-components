import Ext_grid_NumberColumn from './Ext/grid/NumberColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCNumbercolumn extends Ext_grid_NumberColumn {
  constructor() {
    super ([], []);
    this.xtype = 'numbercolumn';
  }
}
try {
  window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-numbercolumn', EWCNumbercolumn);
}
