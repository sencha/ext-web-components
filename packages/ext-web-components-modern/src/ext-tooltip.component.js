import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import ElementParser from './ElementParser.js';

export default class EWCTooltip extends Ext_tip_ToolTip {
  constructor() {
    super ([], []);
    this.xtype = 'tooltip';
  }
}
window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));
