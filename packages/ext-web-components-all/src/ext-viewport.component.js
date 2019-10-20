import Ext_viewport_Default from './Ext/viewport/Default.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtViewport extends Ext_viewport_Default {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'viewport'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-viewport', ExtViewport);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-viewport', HTMLParsedElement.withParsedCallback(ExtViewport))
//export default reactify(ExtViewport);