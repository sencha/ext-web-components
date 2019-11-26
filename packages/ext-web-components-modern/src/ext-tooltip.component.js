//import Ext_tip_ToolTip from '@sencha/ext-runtime-base/dist/./Ext/tip/ToolTip.js';
import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTooltip extends Ext_tip_ToolTip {
    constructor() {
        super ([], []);
        this.xtype = 'tooltip';
    }

}
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(EWCTooltip));

