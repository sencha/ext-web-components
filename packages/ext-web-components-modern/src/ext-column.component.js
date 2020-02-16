import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCColumn extends Ext_grid_column_Template {
  constructor() {
    super ([], []);
    this.xtype = 'column';
  }
}
try {
  window.customElements.define('ext-column', ElementParser.withParsedCallback(EWCColumn));
}
catch(e) {
  window.customElements.define('ext-column', EWCColumn);
}
