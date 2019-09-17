import Ext_MessageBox_Component from './Ext/MessageBox'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtMessageboxComponent extends Ext_MessageBox_Component {
    constructor() {
        super (
            {},
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
