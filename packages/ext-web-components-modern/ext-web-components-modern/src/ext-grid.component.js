import Ext_grid_Grid from './Ext/grid/Grid.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGrid extends Ext_grid_Grid {
  constructor() {
    super ([], []);
    this.xtype = 'grid';
  }
}
try {
  if (window.customElements.get('ext-grid') == undefined) {
    window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
  }
}
catch(e) {
  if (window.customElements.get('ext-grid') == undefined) {
    window.customElements.define('ext-grid', EWCGrid);
  }
}
