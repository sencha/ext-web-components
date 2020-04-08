import Ext_dataview_ChipView from './Ext/dataview/ChipView.js';
import ElementParser from './common/ElementParser.js';

export default class EWCChipview extends Ext_dataview_ChipView {
  constructor() {
    super ([], []);
    this.xtype = 'chipview';
  }
}
try {
  if (window.customElements.get('ext-chipview') == undefined) {
    window.customElements.define('ext-chipview', ElementParser.withParsedCallback(EWCChipview));
  }
}
catch(e) {
  if (window.customElements.get('ext-chipview') == undefined) {
    window.customElements.define('ext-chipview', EWCChipview);
  }
}
