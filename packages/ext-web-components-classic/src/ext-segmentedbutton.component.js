import Ext_button_Segmented from './Ext/button/Segmented.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSegmentedbutton extends Ext_button_Segmented {
  constructor() {
    super ([], []);
    this.xtype = 'segmentedbutton';
  }
}
try {
  if (window.customElements.get('ext-segmentedbutton') == undefined) {
    window.customElements.define('ext-segmentedbutton', ElementParser.withParsedCallback(EWCSegmentedbutton));
  }
}
catch(e) {
  if (window.customElements.get('ext-segmentedbutton') == undefined) {
    window.customElements.define('ext-segmentedbutton', EWCSegmentedbutton);
  }
}
