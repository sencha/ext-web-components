import Ext_Chip from './Ext/Chip.js';
import ElementParser from './common/ElementParser.js';

export default class EWCChip extends Ext_Chip {
  constructor() {
    super ([], []);
    this.xtype = 'chip';
  }
}
try {
  if (window.customElements.get('ext-chip') == undefined) {
    window.customElements.define('ext-chip', ElementParser.withParsedCallback(EWCChip));
  }
}
catch(e) {
  if (window.customElements.get('ext-chip') == undefined) {
    window.customElements.define('ext-chip', EWCChip);
  }
}
