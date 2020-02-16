import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTextcell extends Ext_grid_cell_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textcell';
  }
}
try {
  window.customElements.define('ext-textcell', ElementParser.withParsedCallback(EWCTextcell));
}
catch(e) {
  window.customElements.define('ext-textcell', EWCTextcell);
}
