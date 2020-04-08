import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPagingtoolbar extends Ext_grid_PagingToolbar {
  constructor() {
    super ([], []);
    this.xtype = 'pagingtoolbar';
  }
}
try {
  if (window.customElements.get('ext-pagingtoolbar') == undefined) {
    window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-pagingtoolbar') == undefined) {
    window.customElements.define('ext-pagingtoolbar', EWCPagingtoolbar);
  }
}
