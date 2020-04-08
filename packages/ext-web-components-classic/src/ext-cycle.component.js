import Ext_CycleButton from './Ext/CycleButton.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCycle extends Ext_CycleButton {
  constructor() {
    super ([], []);
    this.xtype = 'cycle';
  }
}
try {
  if (window.customElements.get('ext-cycle') == undefined) {
    window.customElements.define('ext-cycle', ElementParser.withParsedCallback(EWCCycle));
  }
}
catch(e) {
  if (window.customElements.get('ext-cycle') == undefined) {
    window.customElements.define('ext-cycle', EWCCycle);
  }
}
