import Ext_Sheet from './Ext/Sheet.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSheet extends Ext_Sheet {
  constructor() {
    super ([], []);
    this.xtype = 'sheet';
  }
}
try {
  if (window.customElements.get('ext-sheet') == undefined) {
    window.customElements.define('ext-sheet', ElementParser.withParsedCallback(EWCSheet));
  }
}
catch(e) {
  if (window.customElements.get('ext-sheet') == undefined) {
    window.customElements.define('ext-sheet', EWCSheet);
  }
}
