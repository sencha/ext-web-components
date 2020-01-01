import Ext_IndexBar from './Ext/IndexBar.js';
import ElementParser from './ElementParser.js';

export default class EWCIndexbar extends Ext_IndexBar {
  constructor() {
    super ([], []);
    this.xtype = 'indexbar';
  }
}
window.customElements.define('ext-indexbar', ElementParser.withParsedCallback(EWCIndexbar));
