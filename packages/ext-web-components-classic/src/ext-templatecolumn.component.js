import Ext_grid_TemplateColumn from './Ext/grid/TemplateColumn.js';
import ElementParser from './ElementParser.js';

export default class EWCTemplatecolumn extends Ext_grid_TemplateColumn {
  constructor() {
    super ([], []);
    this.xtype = 'templatecolumn';
  }
}
try {
  window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
}
