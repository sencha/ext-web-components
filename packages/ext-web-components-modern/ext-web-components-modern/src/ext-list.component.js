import Ext_List from './Ext/List.js';
import ElementParser from './common/ElementParser.js';

export default class EWCList extends Ext_List {
  constructor() {
    super ([], []);
    this.xtype = 'list';
  }
}
try {
  if (window.customElements.get('ext-list') == undefined) {
    window.customElements.define('ext-list', ElementParser.withParsedCallback(EWCList));
  }
}
catch(e) {
  if (window.customElements.get('ext-list') == undefined) {
    window.customElements.define('ext-list', EWCList);
  }
}
