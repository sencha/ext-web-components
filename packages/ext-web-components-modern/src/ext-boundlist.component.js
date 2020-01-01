import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import ElementParser from './ElementParser.js';

export default class EWCBoundlist extends Ext_dataview_BoundList {
  constructor() {
    super ([], []);
    this.xtype = 'boundlist';
  }
}
window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
