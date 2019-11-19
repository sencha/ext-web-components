import Ext_Video from './Ext/Video'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtVideoComponent extends Ext_Video {
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
//        window.customElements.define('ext-video', ExtVideoComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-video', HTMLParsedElement.withParsedCallback(ExtVideoComponent))
