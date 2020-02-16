import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTemplatecolumn extends Ext_grid_column_Template {
  constructor() {
    super ([], []);
    this.xtype = 'templatecolumn';
  }
}
try {
  window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
}
catch(e) {
  window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
}
