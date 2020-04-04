import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreecell extends Ext_grid_cell_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treecell';
  }
}
try {
  if (window.customElements.get('ext-treecell') == undefined) {
    window.customElements.define('ext-treecell', ElementParser.withParsedCallback(EWCTreecell));
  }
}
catch(e) {
  if (window.customElements.get('ext-treecell') == undefined) {
    window.customElements.define('ext-treecell', EWCTreecell);
  }
}
