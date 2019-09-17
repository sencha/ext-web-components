import Ext_Image_Component from './Ext/Image'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtImgComponent extends Ext_Image_Component {
    constructor() {
        super ()
        this.xtype = 'img'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-img', ExtImgComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-img', HTMLParsedElement.withParsedCallback(ExtImgComponent))
