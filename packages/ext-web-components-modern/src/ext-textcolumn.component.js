import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTextcolumn extends Ext_grid_column_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textcolumn';
  }
}
try {
  if (window.customElements.get('ext-textcolumn') == undefined) {
    window.customElements.define('ext-textcolumn', ElementParser.withParsedCallback(EWCTextcolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-textcolumn') == undefined) {
    window.customElements.define('ext-textcolumn', EWCTextcolumn);
  }
}
