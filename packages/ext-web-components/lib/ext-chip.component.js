import Ext_Chip_Component from './Ext/Chip'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtChipComponent extends Ext_Chip_Component {
    constructor() {
        super (
            {},
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
