import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRowbody extends Ext_grid_RowBody {
  constructor() {
    super ([], []);
    this.xtype = 'rowbody';
  }
}
try {
  if (window.customElements.get('ext-rowbody') == undefined) {
    window.customElements.define('ext-rowbody', ElementParser.withParsedCallback(EWCRowbody));
  }
}
catch(e) {
  if (window.customElements.get('ext-rowbody') == undefined) {
    window.customElements.define('ext-rowbody', EWCRowbody);
  }
}
