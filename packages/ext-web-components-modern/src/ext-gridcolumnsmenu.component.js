import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import ElementParser from './ElementParser.js';

export default class EWCGridcolumnsmenu extends Ext_grid_menu_Columns {
  constructor() {
    super ([], []);
    this.xtype = 'gridcolumnsmenu';
  }
}
window.customElements.define('ext-gridcolumnsmenu', ElementParser.withParsedCallback(EWCGridcolumnsmenu));
