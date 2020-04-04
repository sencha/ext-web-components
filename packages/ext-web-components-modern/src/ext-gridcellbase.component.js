import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridcellbase extends Ext_grid_cell_Base {
  constructor() {
    super ([], []);
    this.xtype = 'gridcellbase';
  }
}
try {
  if (window.customElements.get('ext-gridcellbase') == undefined) {
    window.customElements.define('ext-gridcellbase', ElementParser.withParsedCallback(EWCGridcellbase));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridcellbase') == undefined) {
    window.customElements.define('ext-gridcellbase', EWCGridcellbase);
  }
}
