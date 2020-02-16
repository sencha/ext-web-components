import Ext_Sheet from './Ext/Sheet.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSheet extends Ext_Sheet {
  constructor() {
    super ([], []);
    this.xtype = 'sheet';
  }
}
try {
  window.customElements.define('ext-sheet', ElementParser.withParsedCallback(EWCSheet));
}
catch(e) {
  window.customElements.define('ext-sheet', EWCSheet);
}
