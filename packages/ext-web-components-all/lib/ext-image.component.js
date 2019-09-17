import Ext_Image_Component from './Ext/Image'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtImageComponent extends Ext_Image_Component {
    constructor() {
        super ()
        this.xtype = 'image'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-image', ExtImageComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(ExtImageComponent))
