import Ext_button_Segmented from './Ext/button/Segmented.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSegmentedbutton extends Ext_button_Segmented {
  constructor() {
    super ([], []);
    this.xtype = 'segmentedbutton';
  }
}
try {
  window.customElements.define('ext-segmentedbutton', ElementParser.withParsedCallback(EWCSegmentedbutton));
}
catch(e) {
  window.customElements.define('ext-segmentedbutton', EWCSegmentedbutton);
}
