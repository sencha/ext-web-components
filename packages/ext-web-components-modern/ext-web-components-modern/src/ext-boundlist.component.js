import Ext_dataview_BoundList from './Ext/dataview/BoundList.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBoundlist extends Ext_dataview_BoundList {
  constructor() {
    super ([], []);
    this.xtype = 'boundlist';
  }
}
try {
  if (window.customElements.get('ext-boundlist') == undefined) {
    window.customElements.define('ext-boundlist', ElementParser.withParsedCallback(EWCBoundlist));
  }
}
catch(e) {
  if (window.customElements.get('ext-boundlist') == undefined) {
    window.customElements.define('ext-boundlist', EWCBoundlist);
  }
}
