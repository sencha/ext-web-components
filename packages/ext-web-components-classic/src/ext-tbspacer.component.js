import Ext_toolbar_Spacer from './Ext/toolbar/Spacer.js';
import ElementParser from './ElementParser.js';

export default class EWCTbspacer extends Ext_toolbar_Spacer {
  constructor() {
    super ([], []);
    this.xtype = 'tbspacer';
  }
}
window.customElements.define('ext-tbspacer', ElementParser.withParsedCallback(EWCTbspacer));
