import Ext_Tab from './Ext/Tab.js';
import ElementParser from './ElementParser.js';

export default class EWCTab extends Ext_Tab {
  constructor() {
    super ([], []);
    this.xtype = 'tab';
  }
}
window.customElements.define('ext-tab', ElementParser.withParsedCallback(EWCTab));
