import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRownumberercell extends Ext_grid_cell_RowNumberer {
  constructor() {
    super ([], []);
    this.xtype = 'rownumberercell';
  }
}
try {
  if (window.customElements.get('ext-rownumberercell') == undefined) {
    window.customElements.define('ext-rownumberercell', ElementParser.withParsedCallback(EWCRownumberercell));
  }
}
catch(e) {
  if (window.customElements.get('ext-rownumberercell') == undefined) {
    window.customElements.define('ext-rownumberercell', EWCRownumberercell);
  }
}
