import Ext_Label from './Ext/Label.js';
import ElementParser from './ElementParser.js';

export default class EWCLabel extends Ext_Label {
  constructor() {
    super ([], []);
    this.xtype = 'label';
  }
}
try {
  window.customElements.define('ext-label', ElementParser.withParsedCallback(EWCLabel));
}
catch(e) {
  window.customElements.define('ext-label', EWCLabel);
}
