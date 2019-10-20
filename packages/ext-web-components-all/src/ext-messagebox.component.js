import Ext_MessageBox from './Ext/MessageBox.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtMessagebox extends Ext_MessageBox {
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
//        window.customElements.define('ext-messagebox', ExtMessagebox);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-messagebox', HTMLParsedElement.withParsedCallback(ExtMessagebox))
//export default reactify(ExtMessagebox);