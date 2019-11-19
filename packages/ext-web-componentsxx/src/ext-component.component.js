import Ext_Gadget from './Ext/Gadget'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtComponentComponent extends Ext_Gadget {
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
//        window.customElements.define('ext-component', ExtComponentComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(ExtComponentComponent))
