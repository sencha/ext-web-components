import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCChipview extends Ext_dataview_ChipView {
  constructor() {
    super ([], []);
    this.xtype = 'chipview';
  }
}
try {
  window.customElements.define('ext-chipview', ElementParser.withParsedCallback(EWCChipview));
}
catch(e) {
  window.customElements.define('ext-chipview', EWCChipview);
}
