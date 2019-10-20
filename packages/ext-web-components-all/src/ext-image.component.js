import Ext_Image from './Ext/Image.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtImage extends Ext_Image {
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
//        window.customElements.define('ext-image', ExtImage);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(ExtImage))
//export default reactify(ExtImage);