import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import ElementParser from './ElementParser.js';

export default class EWCGridsortascmenuitem extends Ext_grid_menu_SortAsc {
  constructor() {
    super ([], []);
    this.xtype = 'gridsortascmenuitem';
  }
}
try {
  window.customElements.define('ext-gridsortascmenuitem', ElementParser.withParsedCallback(EWCGridsortascmenuitem));
}
catch(e) {
  window.customElements.define('ext-gridsortascmenuitem', EWCGridsortascmenuitem);
}
