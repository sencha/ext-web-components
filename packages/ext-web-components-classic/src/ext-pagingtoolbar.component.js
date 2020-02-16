import Ext_PagingToolbar from './Ext/PagingToolbar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPagingtoolbar extends Ext_PagingToolbar {
  constructor() {
    super ([], []);
    this.xtype = 'pagingtoolbar';
  }
}
try {
  window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
}
catch(e) {
  window.customElements.define('ext-pagingtoolbar', EWCPagingtoolbar);
}
