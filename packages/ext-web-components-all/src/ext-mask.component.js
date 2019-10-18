import Ext_Mask from './Ext/Mask.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMaskComponent extends Ext_Mask {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'mask'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-mask', ExtMaskComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(ExtMaskComponent))
