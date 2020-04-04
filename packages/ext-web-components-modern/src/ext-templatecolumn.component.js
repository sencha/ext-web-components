import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTemplatecolumn extends Ext_grid_column_Template {
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
