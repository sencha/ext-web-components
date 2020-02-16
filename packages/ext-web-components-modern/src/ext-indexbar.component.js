import Ext_IndexBar from './Ext/IndexBar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCIndexbar extends Ext_IndexBar {
  constructor() {
    super ([], []);
    this.xtype = 'indexbar';
  }
}
try {
  window.customElements.define('ext-indexbar', ElementParser.withParsedCallback(EWCIndexbar));
}
catch(e) {
  window.customElements.define('ext-indexbar', EWCIndexbar);
}
