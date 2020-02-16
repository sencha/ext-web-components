import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTextcolumn extends Ext_grid_column_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textcolumn';
  }
}
try {
  window.customElements.define('ext-textcolumn', ElementParser.withParsedCallback(EWCTextcolumn));
}
catch(e) {
  window.customElements.define('ext-textcolumn', EWCTextcolumn);
}
