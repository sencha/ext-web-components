import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import ElementParser from './ElementParser.js';

export default class EWCItemheader extends Ext_dataview_ItemHeader {
  constructor() {
    super ([], []);
    this.xtype = 'itemheader';
  }
}
window.customElements.define('ext-itemheader', ElementParser.withParsedCallback(EWCItemheader));
