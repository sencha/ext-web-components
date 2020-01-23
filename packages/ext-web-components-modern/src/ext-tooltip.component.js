import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import ElementParser from './ElementParser.js';

export default class EWCTooltip extends Ext_tip_ToolTip {
  constructor() {
    super ([], []);
    this.xtype = 'tooltip';
  }
}
try {
  window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));
}
catch(e) {
  window.customElements.define('ext-tooltip', EWCTooltip);
}
