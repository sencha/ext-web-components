import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import ElementParser from './ElementParser.js';

export default class EWCTextcell extends Ext_grid_cell_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textcell';
  }
}
window.customElements.define('ext-textcell', ElementParser.withParsedCallback(EWCTextcell));
