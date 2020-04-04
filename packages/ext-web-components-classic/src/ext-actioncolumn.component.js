import Ext_grid_ActionColumn from './Ext/grid/ActionColumn.js';
import ElementParser from './common/ElementParser.js';

export default class EWCActioncolumn extends Ext_grid_ActionColumn {
  constructor() {
    super ([], []);
    this.xtype = 'actioncolumn';
  }
}
try {
  if (window.customElements.get('ext-actioncolumn') == undefined) {
    window.customElements.define('ext-actioncolumn', ElementParser.withParsedCallback(EWCActioncolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-actioncolumn') == undefined) {
    window.customElements.define('ext-actioncolumn', EWCActioncolumn);
  }
}
