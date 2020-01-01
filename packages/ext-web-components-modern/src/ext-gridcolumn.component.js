import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './ElementParser.js';

export default class EWCGridcolumn extends Ext_grid_column_Template {
  constructor() {
    super ([], []);
    this.xtype = 'gridcolumn';
  }
}
window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
