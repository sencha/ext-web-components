import Ext_grid_Grid from './Ext/grid/Grid.js';
import ElementParser from './ElementParser.js';

export default class EWCGrid extends Ext_grid_Grid {
  constructor() {
    super ([], []);
    this.xtype = 'grid';
  }
}
try {
  window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
}
catch(e) {
  window.customElements.define('ext-grid', EWCGrid);
}
