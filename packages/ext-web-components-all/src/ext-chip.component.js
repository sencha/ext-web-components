import Ext_Chip from './Ext/Chip.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtChipComponent extends Ext_Chip {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'chip'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chip', ExtChipComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(ExtChipComponent))
