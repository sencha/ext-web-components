import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './ElementParser.js';

export default class EWCTableview extends Ext_grid_View {
  constructor() {
    super ([], []);
    this.xtype = 'tableview';
  }
}
try {
  window.customElements.define('ext-tableview', ElementParser.withParsedCallback(EWCTableview));
}
catch(e) {
  window.customElements.define('ext-tableview', EWCTableview);
}
