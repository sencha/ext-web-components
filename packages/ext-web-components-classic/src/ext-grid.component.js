import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCGrid extends Ext_grid_GridPanel {
  constructor() {
    super ([], []);
    this.xtype = 'grid';
  }
}
window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
