import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTableview extends Ext_grid_View {
  constructor() {
    super ([], []);
    this.xtype = 'tableview';
  }
}
try {
  if (window.customElements.get('ext-tableview') == undefined) {
    window.customElements.define('ext-tableview', ElementParser.withParsedCallback(EWCTableview));
  }
}
catch(e) {
  if (window.customElements.get('ext-tableview') == undefined) {
    window.customElements.define('ext-tableview', EWCTableview);
  }
}
