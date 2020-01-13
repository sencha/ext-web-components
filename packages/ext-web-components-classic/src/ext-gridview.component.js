import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './ElementParser.js';

export default class EWCGridview extends Ext_grid_View {
  constructor() {
    super ([], []);
    this.xtype = 'gridview';
  }
}
window.customElements.define('ext-gridview', ElementParser.withParsedCallback(EWCGridview));
