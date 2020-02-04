import Ext_toolbar_Spacer from './Ext/toolbar/Spacer.js';
import ElementParser from './ElementParser.js';

export default class EWCTbspacer extends Ext_toolbar_Spacer {
  constructor() {
    super ([], []);
    this.xtype = 'tbspacer';
  }
}
try {
  window.customElements.define('ext-tbspacer', ElementParser.withParsedCallback(EWCTbspacer));
}
catch(e) {
  window.customElements.define('ext-tbspacer', EWCTbspacer);
}
