import Ext_toolbar_TextItem from './Ext/toolbar/TextItem.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTbtext extends Ext_toolbar_TextItem {
  constructor() {
    super ([], []);
    this.xtype = 'tbtext';
  }
}
try {
  window.customElements.define('ext-tbtext', ElementParser.withParsedCallback(EWCTbtext));
}
catch(e) {
  window.customElements.define('ext-tbtext', EWCTbtext);
}
