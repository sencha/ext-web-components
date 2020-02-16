import Ext_NestedList from './Ext/NestedList.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCNestedlist extends Ext_NestedList {
  constructor() {
    super ([], []);
    this.xtype = 'nestedlist';
  }
}
try {
  window.customElements.define('ext-nestedlist', ElementParser.withParsedCallback(EWCNestedlist));
}
catch(e) {
  window.customElements.define('ext-nestedlist', EWCNestedlist);
}
