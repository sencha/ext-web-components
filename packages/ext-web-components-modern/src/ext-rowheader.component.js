import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import ElementParser from './ElementParser.js';

export default class EWCRowheader extends Ext_grid_RowHeader {
  constructor() {
    super ([], []);
    this.xtype = 'rowheader';
  }
}
window.customElements.define('ext-rowheader', ElementParser.withParsedCallback(EWCRowheader));
