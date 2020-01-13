import Ext_BoundList from './Ext/BoundList.js';
import ElementParser from './ElementParser.js';

export default class EWCBoundlist extends Ext_BoundList {
  constructor() {
    super ([], []);
    this.xtype = 'boundlist';
  }
}
window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
