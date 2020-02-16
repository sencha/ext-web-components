import Ext_Chip from './Ext/Chip.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCChip extends Ext_Chip {
  constructor() {
    super ([], []);
    this.xtype = 'chip';
  }
}
try {
  window.customElements.define('ext-chip', ElementParser.withParsedCallback(EWCChip));
}
catch(e) {
  window.customElements.define('ext-chip', EWCChip);
}
