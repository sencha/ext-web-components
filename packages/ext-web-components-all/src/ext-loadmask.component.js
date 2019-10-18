import Ext_LoadMask from './Ext/LoadMask.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtLoadmaskComponent extends Ext_LoadMask {
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
//        window.customElements.define('ext-loadmask', ExtLoadmaskComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-loadmask', HTMLParsedElement.withParsedCallback(ExtLoadmaskComponent))
