import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGrid extends Ext_grid_GridPanel {
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
