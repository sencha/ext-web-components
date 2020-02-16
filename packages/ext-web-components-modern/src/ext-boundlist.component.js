import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCBoundlist extends Ext_dataview_BoundList {
  constructor() {
    super ([], []);
    this.xtype = 'boundlist';
  }
}
try {
  window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
}
catch(e) {
  window.customElements.define('ext-boundlist', EWCBoundlist);
}
