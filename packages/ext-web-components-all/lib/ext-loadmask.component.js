import Ext_LoadMask_Component from './Ext/LoadMask'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtLoadmaskComponent extends Ext_LoadMask_Component {
    constructor() {
        super ()
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
