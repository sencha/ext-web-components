import Ext_field_Container from './Ext/field/Container'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtContainerfieldComponent extends Ext_field_Container {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'containerfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-containerfield', ExtContainerfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-containerfield', HTMLParsedElement.withParsedCallback(ExtContainerfieldComponent))
