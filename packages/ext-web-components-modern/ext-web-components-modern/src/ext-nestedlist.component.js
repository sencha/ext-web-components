import Ext_NestedList from './Ext/NestedList.js';
import ElementParser from './common/ElementParser.js';

export default class EWCNestedlist extends Ext_NestedList {
  constructor() {
    super ([], []);
    this.xtype = 'nestedlist';
  }
}
try {
  if (window.customElements.get('ext-nestedlist') == undefined) {
    window.customElements.define('ext-nestedlist', ElementParser.withParsedCallback(EWCNestedlist));
  }
}
catch(e) {
  if (window.customElements.get('ext-nestedlist') == undefined) {
    window.customElements.define('ext-nestedlist', EWCNestedlist);
  }
}
