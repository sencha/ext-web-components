import Ext_toolbar_Item from './Ext/toolbar/Item.js';
import ElementParser from './ElementParser.js';

export default class EWCTbitem extends Ext_toolbar_Item {
  constructor() {
    super ([], []);
    this.xtype = 'tbitem';
  }
}
window.customElements.define('ext-tbitem', ElementParser.withParsedCallback(EWCTbitem));
