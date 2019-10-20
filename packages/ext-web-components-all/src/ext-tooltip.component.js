import Ext_tip_ToolTip from './Ext/tip/ToolTip.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTooltip extends Ext_tip_ToolTip {
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
//        window.customElements.define('ext-tooltip', ExtTooltip);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltip))
//export default reactify(ExtTooltip);