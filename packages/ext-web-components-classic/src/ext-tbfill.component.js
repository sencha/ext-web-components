import Ext_toolbar_Fill from './Ext/toolbar/Fill.js';
import ElementParser from './ElementParser.js';

export default class EWCTbfill extends Ext_toolbar_Fill {
  constructor() {
    super ([], []);
    this.xtype = 'tbfill';
  }
}
try {
  window.customElements.define('ext-tbfill', ElementParser.withParsedCallback(EWCTbfill));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-tbfill', EWCTbfill);
}
