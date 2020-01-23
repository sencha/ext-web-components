import Ext_grid_RowNumberer from './Ext/grid/RowNumberer.js';
import ElementParser from './ElementParser.js';

export default class EWCRownumberer extends Ext_grid_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberer';
  }
}
try {
  window.customElements.define('ext-rownumberer', ElementParser.withParsedCallback(EWCRownumberer));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-rownumberer', EWCRownumberer);
}
