import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
  constructor() {
    super ([], []);
    this.xtype = 'gridshowingroupsmenuitem';
  }
}
try {
  window.customElements.define('ext-gridshowingroupsmenuitem', ElementParser.withParsedCallback(EWCGridshowingroupsmenuitem));
}
catch(e) {
  window.customElements.define('ext-gridshowingroupsmenuitem', EWCGridshowingroupsmenuitem);
}
