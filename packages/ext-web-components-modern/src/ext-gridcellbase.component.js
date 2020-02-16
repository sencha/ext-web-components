import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCGridcellbase extends Ext_grid_cell_Base {
  constructor() {
    super ([], []);
    this.xtype = 'gridcellbase';
  }
}
try {
  window.customElements.define('ext-gridcellbase', ElementParser.withParsedCallback(EWCGridcellbase));
}
catch(e) {
  window.customElements.define('ext-gridcellbase', EWCGridcellbase);
}
