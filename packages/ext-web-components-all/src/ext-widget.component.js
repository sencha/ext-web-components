import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtWidget extends Ext_Gadget {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'widget'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-widget', ExtWidget);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(ExtWidget))
//export default reactify(ExtWidget);