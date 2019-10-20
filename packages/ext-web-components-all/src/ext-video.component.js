import Ext_Video from './Ext/Video.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtVideo extends Ext_Video {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'video'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-video', ExtVideo);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideo))
//export default reactify(ExtVideo);