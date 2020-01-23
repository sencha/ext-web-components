import Ext_dataview_EmptyText from './Ext/dataview/EmptyText.js';
import ElementParser from './ElementParser.js';

export default class EWCEmptytext extends Ext_dataview_EmptyText {
  constructor() {
    super ([], []);
    this.xtype = 'emptytext';
  }
}
try {
  window.customElements.define('ext-emptytext', ElementParser.withParsedCallback(EWCEmptytext));
}
catch(e) {
  window.customElements.define('ext-emptytext', EWCEmptytext);
}
