import Ext_Image from './Ext/Image.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtImageComponent extends Ext_Image {
    constructor() {
        super (
            [],
            []
        )
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
