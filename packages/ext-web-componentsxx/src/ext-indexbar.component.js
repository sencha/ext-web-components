import Ext_IndexBar from './Ext/IndexBar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtIndexbarComponent extends Ext_IndexBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'indexbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-indexbar', ExtIndexbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-indexbar', HTMLParsedElement.withParsedCallback(ExtIndexbarComponent))
