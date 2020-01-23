import Ext_BoundList from './Ext/BoundList.js';
import ElementParser from './ElementParser.js';

export default class EWCBoundlist extends Ext_BoundList {
  constructor() {
    super ([], []);
    this.xtype = 'boundlist';
  }
}
try {
  window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-boundlist', EWCBoundlist);
}
