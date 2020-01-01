import Ext_List from './Ext/List.js';
import ElementParser from './ElementParser.js';

export default class EWCList extends Ext_List {
  constructor() {
    super ([], []);
    this.xtype = 'list';
  }
}
window.customElements.define('ext-list', ElementParser.withParsedCallback(EWCList));
