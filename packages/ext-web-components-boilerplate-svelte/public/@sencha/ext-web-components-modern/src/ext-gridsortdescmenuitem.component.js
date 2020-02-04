import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc.js';
import ElementParser from './ElementParser.js';

export default class EWCGridsortdescmenuitem extends Ext_grid_menu_SortDesc {
  constructor() {
    super ([], []);
    this.xtype = 'gridsortdescmenuitem';
  }
}
try {
  window.customElements.define('ext-gridsortdescmenuitem', ElementParser.withParsedCallback(EWCGridsortdescmenuitem));
}
catch(e) {
  window.customElements.define('ext-gridsortdescmenuitem', EWCGridsortdescmenuitem);
}
