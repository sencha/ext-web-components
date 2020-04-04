import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridcolumnsmenu extends Ext_grid_menu_Columns {
  constructor() {
    super ([], []);
    this.xtype = 'gridcolumnsmenu';
  }
}
try {
  if (window.customElements.get('ext-gridcolumnsmenu') == undefined) {
    window.customElements.define('ext-gridcolumnsmenu', ElementParser.withParsedCallback(EWCGridcolumnsmenu));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridcolumnsmenu') == undefined) {
    window.customElements.define('ext-gridcolumnsmenu', EWCGridcolumnsmenu);
  }
}
