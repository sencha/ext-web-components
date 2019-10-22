import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTooltip extends Ext_tip_ToolTip {
    constructor() {
        super ([],[])
        this.xtype = 'tooltip';
    }
}
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltip))
