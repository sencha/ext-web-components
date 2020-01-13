import Ext_toolbar_TextItem from './Ext/toolbar/TextItem.js';
import ElementParser from './ElementParser.js';

export default class EWCTbtext extends Ext_toolbar_TextItem {
  constructor() {
    super ([], []);
    this.xtype = 'tbtext';
  }
}
window.customElements.define('ext-tbtext', ElementParser.withParsedCallback(EWCTbtext));
