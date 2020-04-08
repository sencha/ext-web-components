import Ext_toolbar_TextItem from './Ext/toolbar/TextItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTbtext extends Ext_toolbar_TextItem {
  constructor() {
    super ([], []);
    this.xtype = 'tbtext';
  }
}
try {
  if (window.customElements.get('ext-tbtext') == undefined) {
    window.customElements.define('ext-tbtext', ElementParser.withParsedCallback(EWCTbtext));
  }
}
catch(e) {
  if (window.customElements.get('ext-tbtext') == undefined) {
    window.customElements.define('ext-tbtext', EWCTbtext);
  }
}
