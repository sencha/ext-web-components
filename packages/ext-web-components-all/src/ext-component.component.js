import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtComponent extends Ext_Gadget {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'component'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-component', ExtComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(ExtComponent))
//export default reactify(ExtComponent);