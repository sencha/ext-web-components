import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import ElementParser from './ElementParser.js';

export default class EWCGridsortascmenuitem extends Ext_grid_menu_SortAsc {
  constructor() {
    super ([], []);
    this.xtype = 'gridsortascmenuitem';
  }
}
window.customElements.define('ext-gridsortascmenuitem', ElementParser.withParsedCallback(EWCGridsortascmenuitem));
