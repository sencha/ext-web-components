import Ext_Label from './Ext/Label.js';
import ElementParser from './ElementParser.js';

export default class EWCLabel extends Ext_Label {
  constructor() {
    super ([], []);
    this.xtype = 'label';
  }
}
window.customElements.define('ext-label', ElementParser.withParsedCallback(EWCLabel));
