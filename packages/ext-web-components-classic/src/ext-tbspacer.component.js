import Ext_toolbar_Spacer from './Ext/toolbar/Spacer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTbspacer extends Ext_toolbar_Spacer {
  constructor() {
    super ([], []);
    this.xtype = 'tbspacer';
  }
}
try {
  if (window.customElements.get('ext-tbspacer') == undefined) {
    window.customElements.define('ext-tbspacer', ElementParser.withParsedCallback(EWCTbspacer));
  }
}
catch(e) {
  if (window.customElements.get('ext-tbspacer') == undefined) {
    window.customElements.define('ext-tbspacer', EWCTbspacer);
  }
}
