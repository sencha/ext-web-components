import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import ElementParser from './ElementParser.js';

export default class EWCGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
  constructor() {
    super ([], []);
    this.xtype = 'gridshowingroupsmenuitem';
  }
}
window.customElements.define('ext-gridshowingroupsmenuitem', ElementParser.withParsedCallback(EWCGridshowingroupsmenuitem));
