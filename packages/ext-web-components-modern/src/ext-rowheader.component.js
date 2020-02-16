import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCRowheader extends Ext_grid_RowHeader {
  constructor() {
    super ([], []);
    this.xtype = 'rowheader';
  }
}
try {
  window.customElements.define('ext-rowheader', ElementParser.withParsedCallback(EWCRowheader));
}
catch(e) {
  window.customElements.define('ext-rowheader', EWCRowheader);
}
