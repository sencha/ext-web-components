import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import ElementParser from './ElementParser.js';

export default class EWCTreecell extends Ext_grid_cell_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treecell';
  }
}
window.customElements.define('ext-treecell', ElementParser.withParsedCallback(EWCTreecell));
