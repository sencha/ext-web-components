import Ext_MessageBox from './Ext/MessageBox.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtMessageboxComponent extends Ext_MessageBox {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'messagebox'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-messagebox', ExtMessageboxComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(ExtMessageboxComponent))
