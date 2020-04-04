import Ext_grid_TemplateColumn from './Ext/grid/TemplateColumn.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTemplatecolumn extends Ext_grid_TemplateColumn {
  constructor() {
    super ([], []);
    this.xtype = 'templatecolumn';
  }
}
try {
  if (window.customElements.get('ext-templatecolumn') == undefined) {
    window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-templatecolumn') == undefined) {
    window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
  }
}
