import Ext_grid_RowNumberer from './Ext/grid/RowNumberer.js';
import ElementParser from './ElementParser.js';

export default class EWCRownumberer extends Ext_grid_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberer';
  }
}
window.customElements.define('ext-rownumberer', ElementParser.withParsedCallback(EWCRownumberer));
