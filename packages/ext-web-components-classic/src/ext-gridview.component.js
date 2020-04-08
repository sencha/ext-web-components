import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridview extends Ext_grid_View {
  constructor() {
    super ([], []);
    this.xtype = 'gridview';
  }
}
try {
  if (window.customElements.get('ext-gridview') == undefined) {
    window.customElements.define('ext-gridview', ElementParser.withParsedCallback(EWCGridview));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridview') == undefined) {
    window.customElements.define('ext-gridview', EWCGridview);
  }
}
