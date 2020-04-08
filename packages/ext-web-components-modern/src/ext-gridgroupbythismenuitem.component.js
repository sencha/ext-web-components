import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridgroupbythismenuitem extends Ext_grid_menu_GroupByThis {
  constructor() {
    super ([], []);
    this.xtype = 'gridgroupbythismenuitem';
  }
}
try {
  if (window.customElements.get('ext-gridgroupbythismenuitem') == undefined) {
    window.customElements.define('ext-gridgroupbythismenuitem', ElementParser.withParsedCallback(EWCGridgroupbythismenuitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridgroupbythismenuitem') == undefined) {
    window.customElements.define('ext-gridgroupbythismenuitem', EWCGridgroupbythismenuitem);
  }
}
