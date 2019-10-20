import Ext_Mask from './Ext/Mask.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMask extends Ext_Mask {
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
//        window.customElements.define('ext-mask', ExtMask);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(ExtMask))
//export default reactify(ExtMask);