import Ext_IndexBar from './Ext/IndexBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCIndexbar extends Ext_IndexBar {
  constructor() {
    super ([], []);
    this.xtype = 'indexbar';
  }
}
try {
  if (window.customElements.get('ext-indexbar') == undefined) {
    window.customElements.define('ext-indexbar', ElementParser.withParsedCallback(EWCIndexbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-indexbar') == undefined) {
    window.customElements.define('ext-indexbar', EWCIndexbar);
  }
}
