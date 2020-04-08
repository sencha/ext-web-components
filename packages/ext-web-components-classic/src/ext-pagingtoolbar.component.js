import Ext_PagingToolbar from './Ext/PagingToolbar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPagingtoolbar extends Ext_PagingToolbar {
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
