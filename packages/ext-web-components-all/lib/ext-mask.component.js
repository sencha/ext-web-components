import Ext_Mask_Component from './Ext/Mask'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMaskComponent extends Ext_Mask_Component {
    constructor() {
        super ()
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
