import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCRowbody extends Ext_grid_RowBody {
  constructor() {
    super ([], []);
    this.xtype = 'rowbody';
  }
}
try {
  window.customElements.define('ext-rowbody', ElementParser.withParsedCallback(EWCRowbody));
}
catch(e) {
  window.customElements.define('ext-rowbody', EWCRowbody);
}
