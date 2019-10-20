import Ext_LoadMask from './Ext/LoadMask.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtLoadmask extends Ext_LoadMask {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'loadmask'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-loadmask', ExtLoadmask);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-loadmask', HTMLParsedElement.withParsedCallback(ExtLoadmask))
//export default reactify(ExtLoadmask);