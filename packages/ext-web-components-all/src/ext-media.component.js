import Ext_Media from './Ext/Media.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMedia extends Ext_Media {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'media'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-media', ExtMedia);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-media', HTMLParsedElement.withParsedCallback(ExtMedia))
//export default reactify(ExtMedia);