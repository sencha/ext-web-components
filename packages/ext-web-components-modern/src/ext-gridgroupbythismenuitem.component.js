import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import ElementParser from './ElementParser.js';

export default class EWCGridgroupbythismenuitem extends Ext_grid_menu_GroupByThis {
  constructor() {
    super ([], []);
    this.xtype = 'gridgroupbythismenuitem';
  }
}
window.customElements.define('ext-gridgroupbythismenuitem', ElementParser.withParsedCallback(EWCGridgroupbythismenuitem));
