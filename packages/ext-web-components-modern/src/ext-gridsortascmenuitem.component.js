import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridsortascmenuitem extends Ext_grid_menu_SortAsc {
  constructor() {
    super ([], []);
    this.xtype = 'gridsortascmenuitem';
  }
}
try {
  if (window.customElements.get('ext-gridsortascmenuitem') == undefined) {
    window.customElements.define('ext-gridsortascmenuitem', ElementParser.withParsedCallback(EWCGridsortascmenuitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridsortascmenuitem') == undefined) {
    window.customElements.define('ext-gridsortascmenuitem', EWCGridsortascmenuitem);
  }
}
