import Ext_PagingToolbar from './Ext/PagingToolbar.js';
import ElementParser from './ElementParser.js';

export default class EWCPagingtoolbar extends Ext_PagingToolbar {
  constructor() {
    super ([], []);
    this.xtype = 'pagingtoolbar';
  }
}
window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
