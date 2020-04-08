import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTooltip extends Ext_tip_ToolTip {
  constructor() {
    super ([], []);
    this.xtype = 'tooltip';
  }
}
try {
  if (window.customElements.get('ext-tooltip') == undefined) {
    window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));
  }
}
catch(e) {
  if (window.customElements.get('ext-tooltip') == undefined) {
    window.customElements.define('ext-tooltip', EWCTooltip);
  }
}
