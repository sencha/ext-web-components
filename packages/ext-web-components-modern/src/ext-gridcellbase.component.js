import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import ElementParser from './ElementParser.js';

export default class EWCGridcellbase extends Ext_grid_cell_Base {
  constructor() {
    super ([], []);
    this.xtype = 'gridcellbase';
  }
}
window.customElements.define('ext-gridcellbase', ElementParser.withParsedCallback(EWCGridcellbase));
