import Ext_toolbar_Fill from './Ext/toolbar/Fill.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTbfill extends Ext_toolbar_Fill {
  constructor() {
    super ([], []);
    this.xtype = 'tbfill';
  }
}
try {
  if (window.customElements.get('ext-tbfill') == undefined) {
    window.customElements.define('ext-tbfill', ElementParser.withParsedCallback(EWCTbfill));
  }
}
catch(e) {
  if (window.customElements.get('ext-tbfill') == undefined) {
    window.customElements.define('ext-tbfill', EWCTbfill);
  }
}
