import Ext_grid_Grid from './Ext/grid/Grid.js';
import ElementParser from './ElementParser.js';

export default class EWCGrid extends Ext_grid_Grid {
  constructor() {
    super ([], []);
    this.xtype = 'grid';
  }
}
window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
import './ElementCell';