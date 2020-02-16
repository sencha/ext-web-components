import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGridcolumnsmenu extends Ext_grid_menu_Columns {
  constructor() {
    super ([], []);
    this.xtype = 'gridcolumnsmenu';
  }
}
try {
  window.customElements.define('ext-gridcolumnsmenu', ElementParser.withParsedCallback(EWCGridcolumnsmenu));
}
catch(e) {
  window.customElements.define('ext-gridcolumnsmenu', EWCGridcolumnsmenu);
}
