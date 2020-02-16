import Ext_List from './Ext/List.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCList extends Ext_List {
  constructor() {
    super ([], []);
    this.xtype = 'list';
  }
}
try {
  window.customElements.define('ext-list', ElementParser.withParsedCallback(EWCList));
}
catch(e) {
  window.customElements.define('ext-list', EWCList);
}
