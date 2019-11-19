import Ext_field_SingleSlider from './Ext/field/SingleSlider'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSinglesliderfieldComponent extends Ext_field_SingleSlider {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'singlesliderfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-singlesliderfield', ExtSinglesliderfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-singlesliderfield', HTMLParsedElement.withParsedCallback(ExtSinglesliderfieldComponent))
