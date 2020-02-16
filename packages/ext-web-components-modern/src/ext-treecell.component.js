import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTreecell extends Ext_grid_cell_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treecell';
  }
}
try {
  window.customElements.define('ext-treecell', ElementParser.withParsedCallback(EWCTreecell));
}
catch(e) {
  window.customElements.define('ext-treecell', EWCTreecell);
}
