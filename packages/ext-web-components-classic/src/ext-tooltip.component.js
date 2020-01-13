import Ext_ToolTip from './Ext/ToolTip.js';
import ElementParser from './ElementParser.js';

export default class EWCTooltip extends Ext_ToolTip {
  constructor() {
    super ([], []);
    this.xtype = 'tooltip';
  }
}
window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));
