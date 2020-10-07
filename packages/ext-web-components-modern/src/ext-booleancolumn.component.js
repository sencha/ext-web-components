import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBooleancolumn extends Ext_grid_column_Boolean {
  constructor() {
    super ([], []);
    this.xtype = 'booleancolumn';
  }
}
try {
  if (window.customElements.get('ext-booleancolumn') == undefined) {
    window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-booleancolumn') == undefined) {
    window.customElements.define('ext-booleancolumn', EWCBooleancolumn);
  }
}
