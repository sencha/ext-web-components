import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import ElementParser from './common/ElementParser.js';

export default class EWCNumbercell extends Ext_grid_cell_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numbercell';
  }
}
try {
  if (window.customElements.get('ext-numbercell') == undefined) {
    window.customElements.define('ext-numbercell', ElementParser.withParsedCallback(EWCNumbercell));
  }
}
catch(e) {
  if (window.customElements.get('ext-numbercell') == undefined) {
    window.customElements.define('ext-numbercell', EWCNumbercell);
  }
}
