import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import ElementParser from './ElementParser.js';

export default class EWCPagingtoolbar extends Ext_grid_PagingToolbar {
  constructor() {
    super ([], []);
    this.xtype = 'pagingtoolbar';
  }
}
window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
