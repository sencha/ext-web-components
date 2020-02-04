import Ext_CycleButton from './Ext/CycleButton.js';
import ElementParser from './ElementParser.js';

export default class EWCCycle extends Ext_CycleButton {
  constructor() {
    super ([], []);
    this.xtype = 'cycle';
  }
}
try {
  window.customElements.define('ext-cycle', ElementParser.withParsedCallback(EWCCycle));
}
catch(e) {
  window.customElements.define('ext-cycle', EWCCycle);
}
