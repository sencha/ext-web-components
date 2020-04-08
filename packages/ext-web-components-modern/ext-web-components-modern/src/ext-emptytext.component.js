import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import ElementParser from './common/ElementParser.js';

export default class EWCEmptytext extends Ext_dataview_EmptyText {
  constructor() {
    super ([], []);
    this.xtype = 'emptytext';
  }
}
try {
  if (window.customElements.get('ext-emptytext') == undefined) {
    window.customElements.define('ext-emptytext', ElementParser.withParsedCallback(EWCEmptytext));
  }
}
catch(e) {
  if (window.customElements.get('ext-emptytext') == undefined) {
    window.customElements.define('ext-emptytext', EWCEmptytext);
  }
}
