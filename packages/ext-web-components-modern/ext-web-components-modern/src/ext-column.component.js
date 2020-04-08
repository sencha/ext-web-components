import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColumn extends Ext_grid_column_Template {
  constructor() {
    super ([], []);
    this.xtype = 'column';
  }
}
try {
  if (window.customElements.get('ext-column') == undefined) {
    window.customElements.define('ext-column', ElementParser.withParsedCallback(EWCColumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-column') == undefined) {
    window.customElements.define('ext-column', EWCColumn);
  }
}
