import Ext_dataview_ItemHeader from './Ext/dataview/ItemHeader.js';
import ElementParser from './common/ElementParser.js';

export default class EWCItemheader extends Ext_dataview_ItemHeader {
  constructor() {
    super ([], []);
    this.xtype = 'itemheader';
  }
}
try {
  if (window.customElements.get('ext-itemheader') == undefined) {
    window.customElements.define('ext-itemheader', ElementParser.withParsedCallback(EWCItemheader));
  }
}
catch(e) {
  if (window.customElements.get('ext-itemheader') == undefined) {
    window.customElements.define('ext-itemheader', EWCItemheader);
  }
}
