import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import ElementParser from './ElementParser.js';

export default class EWCChipview extends Ext_dataview_ChipView {
  constructor() {
    super ([], []);
    this.xtype = 'chipview';
  }
}
window.customElements.define('ext-chipview', ElementParser.withParsedCallback(EWCChipview));
