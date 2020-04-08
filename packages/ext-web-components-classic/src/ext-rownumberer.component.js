import Ext_grid_RowNumberer from './Ext/grid/RowNumberer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRownumberer extends Ext_grid_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberer';
  }
}
try {
  if (window.customElements.get('ext-rownumberer') == undefined) {
    window.customElements.define('ext-rownumberer', ElementParser.withParsedCallback(EWCRownumberer));
  }
}
catch(e) {
  if (window.customElements.get('ext-rownumberer') == undefined) {
    window.customElements.define('ext-rownumberer', EWCRownumberer);
  }
}
