import Ext_viewport_Default from './Ext/viewport/Default.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtViewportComponent extends Ext_viewport_Default {
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
//        window.customElements.define('ext-viewport', ExtViewportComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-viewport', HTMLParsedElement.withParsedCallback(ExtViewportComponent))
