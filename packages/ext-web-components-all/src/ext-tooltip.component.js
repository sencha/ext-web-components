import Ext_tip_ToolTip from './Ext/tip/ToolTip.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTooltipComponent extends Ext_tip_ToolTip {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tooltip'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tooltip', ExtTooltipComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltipComponent))
