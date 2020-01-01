import Ext_NestedList from './Ext/NestedList.js';
import ElementParser from './ElementParser.js';

export default class EWCNestedlist extends Ext_NestedList {
  constructor() {
    super ([], []);
    this.xtype = 'nestedlist';
  }
}
window.customElements.define('ext-nestedlist', ElementParser.withParsedCallback(EWCNestedlist));
